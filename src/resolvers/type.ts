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
} from "type-graphql";
import { FieldError } from "./helpers";
import { getConnection } from "typeorm";

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
    async allTypes() {
        const types = await TutorType.find({ relations: ["tutor"] });
        console.log(types);
        return types;
    }

    // Create a new type
    @Mutation(() => TypeResponse)
    async addType(@Arg("options") options: TypeInput): Promise<TypeResponse> {
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
}
