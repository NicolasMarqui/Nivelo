import { Hour } from "./../entities/Hour";
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
class HourResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Hour, { nullable: true })
    hour?: Hour;
}

@Resolver()
export class HourResolver {
    // Retrieve all tutors horario
    @Query(() => [Hour] || [])
    async getTutorsHour(
        @Arg("tutorID") tutorID: number,
        @Arg("date") date: string
    ): Promise<Hour[] | []> {
        const tutorHours = await Hour.find({ where: { tutorID, date } });
        return tutorHours;
    }

    // Save a new hour to tutor and date
    @Mutation(() => HourResponse)
    async newHourToTutor(
        @Arg("tutorID") tutorID: number,
        @Arg("date") date: string,
        @Arg("from") from: string,
        @Arg("to") to: string
    ): Promise<HourResponse> {
        let hour;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Hour)
                .values({
                    tutorID,
                    date,
                    from,
                    to,
                })
                .returning("*")
                .execute();
            hour = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { hour };
    }

    // Delete hour from tutor
    @Mutation(() => Boolean)
    async deleteHourFromTutor(@Arg("id") id: string): Promise<Boolean> {
        const hourToDelete = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Hour)
            .where("id = :id", { id })
            .returning("*")
            .execute();

        if (hourToDelete.affected) {
            return true;
        }

        return false;
    }
}
