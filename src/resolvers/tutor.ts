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
}

@Resolver()
export class TutorResolver {
    // GET all Tutors
    @Query(() => [Tutor])
    async allTutors() {
        const allTut = await Tutor.find({
            relations: [
                "user",
                "type",
                "classes",
                "classes.price",
                "categories",
            ],
        });
        return allTut;
    }

    // Create a new Tutor
    @Mutation(() => TutorResponse)
    @UseMiddleware(isAuth)
    async newTutor(
        @Arg("options") options: NewTutorInput,
        @Ctx() { req }: MyContext
    ) {
        const { description } = options;

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
                })
                .returning("*")
                .execute();
            tutor = result.raw[0];
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

        let tutor;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Tutor)
                .set({
                    ...options,
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
}
