import { Price } from "./../entities/Price";
import { Tutor } from "./../entities/Tutor";
import { validateClasses } from "./../utils/validateClasses";
import { Classes } from "./../entities/Classes";
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
import { ClassesInput } from "./inputs";

@ObjectType()
class ClassesResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Classes, { nullable: true })
    classes?: Classes;
}

@Resolver()
export class ClassesResolver {
    // Get all classes
    @Query(() => [Classes])
    async allClasses(): Promise<Classes[] | undefined> {
        const classes = await Classes.find({
            relations: ["tutor", "price", "tutor.user", "price.classes"],
        });

        return classes;
    }

    // Create a new Class
    @Mutation(() => ClassesResponse)
    async newClass(
        @Arg("tutorID") tutorID: number,
        @Arg("options") options: ClassesInput
    ): Promise<ClassesResponse> {
        const errors = validateClasses(options);
        if (errors) return { errors };

        // Select a Tutor
        const tutor = await Tutor.findOne({ where: { id: tutorID } });
        if (!tutor) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Could not find Tutor, try again",
                    },
                ],
            };
        }

        let classes;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Classes)
                .values({
                    ...options,
                    tutor,
                })
                .returning("*")
                .execute();
            classes = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { classes };
    }
}
