import { Category } from "./../entities/Category";
import { validateTutorInfo } from "./../utils/validateTutorInfo";
import { TutorType } from "./../entities/TutorType";
import { JWT_TOKEN } from "./../constants";
import { MyContext } from "./../types";
import { isAuth } from "./../middleware/index";
import { Tutor } from "./../entities/Tutor";
import {
    Arg,
    Ctx,
    Field,
    InputType,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "./../entities/User";
import jwt from "jsonwebtoken";
import { TutorInput } from "./inputs";
import { FieldError } from "./helpers";

@ObjectType()
class TutorResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Tutor, { nullable: true })
    tutor?: Tutor;
}

@InputType()
class NewTutorInput {
    @Field()
    description: string;

    @Field()
    type: number;
}

@Resolver()
export class TutorResolver {
    // GET all Tutors
    @Query(() => [Tutor])
    async allTutors(
        @Arg("limit", () => Int) limit: number,
        @Arg("page", () => Int) page: number,
        @Arg("order", () => String, { nullable: true }) order: string | null,
        @Arg("category", () => [String], { nullable: true })
        category: string[] | null,
        @Arg("type", () => [String], { nullable: true })
        type: string[] | null,
        @Arg("country", () => [String], { nullable: true })
        country: string[] | null
    ): Promise<Tutor[]> {
        const realLimit = Math.min(50, limit) || 10;
        const realOffset = (page - 1) * realLimit;

        const result = getConnection()
            .getRepository(Tutor)
            .createQueryBuilder("tutor")
            .leftJoinAndSelect("tutor.user", "user")
            .leftJoinAndSelect("tutor.classes", "classes")
            .leftJoinAndSelect("classes.price", "price")
            .leftJoinAndSelect("tutor.categories", "categories")
            .leftJoinAndSelect("tutor.type", "tutorType")
            .leftJoinAndSelect(
                "user.userPlatformAccount",
                "userPlatformAccount"
            )
            .leftJoinAndSelect("userPlatformAccount.platform", "platform")
            .take(realLimit)
            .skip(realOffset);

        if (category) {
            result.andWhere("categories.name IN (:...category)", { category });
        }

        if (type) {
            result.andWhere("tutorType.name IN (:...type)", { type });
        }

        if (country) {
            result.andWhere("user.country IN (:...country)", { country });
        }

        if (order) {
            switch (order) {
                case "DESC":
                    result.orderBy("tutor.id", "DESC", "NULLS LAST");
                    break;
                case "ASC":
                    result.orderBy("tutor.id", "ASC", "NULLS LAST");
                    break;
                default:
                    result.orderBy("tutor.id", "DESC", "NULLS LAST");
            }
        } else {
            result.orderBy("tutor.id", "DESC", "NULLS LAST");
        }

        return result.getMany();
    }

    // Create a new Tutor
    @Mutation(() => TutorResponse)
    @UseMiddleware(isAuth)
    async newTutor(
        @Arg("options") options: NewTutorInput,
        @Ctx() { req }: MyContext
    ) {
        const { description, type } = options;

        const userInfo = jwt.verify(
            // @ts-ignore: Unreachable code error
            req.session.user,
            JWT_TOKEN
        ) as any;

        const user = await User.findOne({
            where: { id: userInfo.id },
            relations: ["tutor"],
        });

        // Check if user is already a Tutor
        if (user?.tutor) {
            return {
                errors: [
                    {
                        field: "general",
                        message:
                            "You already submit your application, please wait for further instructions",
                    },
                ],
            };
        }

        const newType = await TutorType.findOne({ where: { id: type } });
        const newCat = await Category.findOne({ where: { id: 12 } });

        // Create a new tutor
        let tutor;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Tutor)
                .values({
                    description,
                    user,
                    type: newType,
                })
                .returning("*")
                .execute();
            tutor = result.raw[0];

            tutor.categories.push(newCat);
            tutor.save();
        } catch (err) {
            return { err };
        }

        return { tutor };
    }

    // Delete a Tutor
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteTutor(@Arg("id") id: number): Promise<Boolean> {
        const tutor = await Tutor.findOne({ where: { id: id } });

        if (!tutor) {
            return false;
        }

        await tutor.remove();
        return true;
    }

    // Update a Tutor
    @Mutation(() => TutorResponse)
    @UseMiddleware(isAuth)
    async updateTutor(
        @Arg("id") id: number,
        @Arg("options") options: TutorInput
    ): Promise<TutorResponse> {
        const errors = validateTutorInfo(options);
        if (errors) {
            return { errors };
        }

        const { description } = options;

        const tutor = await Tutor.findOne({
            where: { id },
            relations: [
                "user",
                "type",
                "classes",
                "classes.price",
                "categories",
                "user.userPlatformAccount",
                "user.userPlatformAccount.platform",
            ],
        });

        if (tutor) {
            tutor.description = description;
            tutor.save();
        }

        return { tutor };
    }

    // Tutor remove his own account
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteAccount(@Arg("id") id: number, @Ctx() { req }: MyContext) {
        const userInfo = jwt.verify(
            // @ts-ignore: Unreachable code error
            req.session.user,
            JWT_TOKEN
        ) as any;

        const user = await User.findOne({
            where: { id: userInfo.id },
            relations: ["tutor"],
        });

        if (user?.tutor.id !== id) {
            return false;
        }

        await user?.tutor.remove();
        return true;
    }

    // Link Tutor to its type
    @Mutation(() => TutorResponse)
    async typeToTutor(
        @Arg("id") id: number,
        @Arg("typeID") typeID: number
    ): Promise<TutorResponse> {
        const type = await TutorType.findOne({
            where: { id: typeID },
            relations: ["tutor"],
        });

        if (!type) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "This type does not exist.",
                    },
                ],
            };
        }

        let tutor;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Tutor)
                .set({
                    type: type,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();
            tutor = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { tutor };
    }

    // Show all tutors by category
    @Query(() => [Category])
    async allTutorsByCategory(
        @Arg("categoryID") categoryID: number
    ): Promise<Category[]> {
        const tutors = await Category.find({
            where: { id: categoryID },
            relations: ["tutors", "tutors.user", "tutors.type"],
        });
        return tutors;
    }

    // Get a single tutor
    @Query(() => TutorResponse)
    async singleTutor(@Arg("id") id: number): Promise<TutorResponse> {
        const tutor = await Tutor.findOne({
            where: { id },
            relations: [
                "user",
                "type",
                "classes",
                "classes.price",
                "categories",
                "user.userPlatformAccount",
                "user.userPlatformAccount.platform",
            ],
        });

        if (!tutor) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Tutor not found...",
                    },
                ],
            };
        }

        return { tutor };
    }

    // Add a new available date
    @Mutation(() => TutorResponse)
    async addAvailableDate(
        @Arg("id") id: number,
        @Arg("options") options: string
    ): Promise<TutorResponse> {
        const tutor = await Tutor.findOne({ where: { id } });
        if (!tutor) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Tutor not found...",
                    },
                ],
            };
        }

        console.log(options);

        // tutor.availability.push(options);
        // tutor.save();

        return { tutor };
    }

    // Add a PIX chave to tutor
    @Mutation(() => TutorResponse)
    async pixChaveTutor(
        @Arg("tutorId") tutorId: number,
        @Arg("key") key: string
    ): Promise<TutorResponse> {
        let tutor;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Tutor)
                .set({
                    chavePix: key,
                })
                .where("id = :id", { id: tutorId })
                .returning("*")
                .execute();

            tutor = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { tutor };
    }
}
