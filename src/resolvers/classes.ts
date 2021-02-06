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
import { raw } from "express";

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
            relations: [
                "tutor",
                "price",
                "tutor.user",
                "price.classes",
                "tutor.type",
            ],
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

    // Update a Class
    @Mutation(() => ClassesResponse)
    async updateClass(
        @Arg("classID") classID: number,
        @Arg("options") options: ClassesInput
    ): Promise<ClassesResponse> {
        const errors = validateClasses(options);
        if (errors) return { errors };

        let classes;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Classes)
                .set({
                    ...options,
                })
                .where("id = :id", { id: classID })
                .returning("*")
                .execute();

            classes = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { classes };
    }

    // Delete a Class
    @Mutation(() => Boolean)
    async deleteClass(@Arg("id") id: number): Promise<Boolean> {
        const classToDelete = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Classes)
            .where("id = :id", { id })
            .execute();

        if (classToDelete.affected) {
            return classToDelete.affected > 0 ? true : false;
        }

        return false;
    }

    // Select one Class
    @Query(() => Classes)
    async singleClass(@Arg("id") id: number): Promise<Classes | Boolean> {
        const singleClass = await Classes.findOne({
            where: { id },
            relations: ["tutor", "tutor.user", "tutor.type", "price"],
        });

        if (!singleClass) return false;

        return singleClass;
    }
}
