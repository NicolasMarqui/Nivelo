import { isAuth } from "./../middleware/index";
import { User } from "./../entities/User";
import { FeedbackInput } from "./inputs/index";
import { Feedback } from "./../entities/Feedback";
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

@ObjectType()
class FeedbackResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Feedback, { nullable: true })
    feedback?: Feedback;
}

@Resolver()
export class FeedbackResolver {
    // Get all tutor feedback
    @Query(() => [Feedback])
    async getTutorFeedbacks(@Arg("id") id: number): Promise<Feedback[]> {
        const feeds = await Feedback.find({
            where: { tutorID: id },
            relations: ["user"],
        });
        return feeds;
    }

    // User add new Feedback
    @Mutation(() => FeedbackResponse)
    @UseMiddleware(isAuth)
    async newFeedback(
        @Arg("userID") userID: number,
        @Arg("tutorID") tutorID: number,
        @Arg("options") options: FeedbackInput
    ): Promise<FeedbackResponse> {
        const user = await User.findOne({ where: { id: userID } });
        if (!user) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Something went wrong... Try again",
                    },
                ],
            };
        }

        // Check if user already left a feedback to tutor
        const hasFeed = await Feedback.findOne({ where: { user, tutorID } });
        if (hasFeed) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "You already left a feedback to this tutor...",
                    },
                ],
            };
        }

        let feedback;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Feedback)
                .values({
                    user,
                    tutorID,
                    ...options,
                })
                .returning("*")
                .execute();
            feedback = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { feedback };
    }
}
