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
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD"
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
}
