import { User } from "./../entities/User";
import { PlatformsInput } from "./inputs/index";
import { Platforms } from "./../entities/Platforms";
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { Category } from "src/entities/Category";
import { getConnection } from "typeorm";
import { FieldError } from "./helpers";

@ObjectType()
class PlatformsResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Platforms, { nullable: true })
    platforms?: Platforms;
}

@Resolver()
export class PlatformsResolver {
    // Get all Platforms
    @Query(() => [Platforms])
    async allPlatforms(): Promise<Platforms[]> {
        const plat = await Platforms.find({
            relations: ["users", "users.tutor"],
        });
        return plat;
    }

    // Insert a new Platform
    @Mutation(() => PlatformsResponse)
    async newPlatform(
        @Arg("options", (_type) => PlatformsInput) options: PlatformsInput
    ): Promise<PlatformsResponse> {
        let platforms;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Platforms)
                .values({
                    ...options,
                })
                .returning("*")
                .execute();
            platforms = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { platforms };
    }

    // Update a plataform
    @Mutation(() => PlatformsResponse)
    async updatePlatform(
        @Arg("id") id: number,
        @Arg("options", (_type) => PlatformsInput) options: PlatformsInput
    ): Promise<PlatformsResponse> {
        const { name, icon } = options;

        let platforms;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Platforms)
                .set({
                    icon,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();
            platforms = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { platforms };
    }
}
