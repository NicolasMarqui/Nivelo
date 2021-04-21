import { validateType } from "./../utils/validateType";
import { TypeInput } from "./inputs/index";
import { TutorType } from "./../entities/TutorType";
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { FieldError } from "./helpers";
import { getConnection } from "typeorm";
import { isAuth } from "../middleware";

@ObjectType()
class TypeResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => TutorType, { nullable: true })
    type?: TutorType;
}

@Resolver()
export class TypeResolver {
    // GET all types
    @Query(() => [TutorType])
    async allTypes(): Promise<TutorType[]> {
        const types = await TutorType.find({
            relations: ["tutor", "tutor.user"],
        });

        return types;
    }

    // Create a new type
    @Mutation(() => TypeResponse)
    async addType(
        @Arg("options", (_type) => TypeInput) options: TypeInput
    ): Promise<TypeResponse> {
        const errors = validateType(options);
        if (errors) {
            return { errors };
        }

        const { name, needsApproval, rules } = options;

        // Create a new type
        let type;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(TutorType)
                .values({
                    name,
                    needsApproval,
                    rules,
                })
                .returning("*")
                .execute();
            type = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { type };
    }

    // Update a type
    @Mutation(() => TypeResponse)
    @UseMiddleware(isAuth)
    async updateType(
        @Arg("id") id: number,
        @Arg("options", (_type) => TypeInput) options: TypeInput
    ): Promise<TypeResponse> {
        const errors = validateType(options);
        if (errors) {
            return { errors };
        }

        let type;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(TutorType)
                .set({
                    ...options,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();
            type = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { type };
    }

    // Delete a type
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteType(@Arg("id") id: number): Promise<Boolean> {
        const type = await TutorType.findOne({ where: { id: id } });

        if (!type) {
            return false;
        }

        await type.remove();
        return true;
    }
}
