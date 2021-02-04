import { JWT_TOKEN } from "./../constants";
import { MyContext } from "./../types";
import { isAuth } from "./../middleware/index";
import { TutorType } from "./../entities/TutorType";
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
import { FieldError } from "./user";
import { User } from "./../entities/User";
import jwt from "jsonwebtoken";
import { Request } from "express";

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
        const allTut = await Tutor.find({ relations: ["user"] });

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
}
