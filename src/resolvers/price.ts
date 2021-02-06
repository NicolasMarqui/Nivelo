import { Classes } from "./../entities/Classes";
import { PriceInput } from "./inputs/index";
import { Price } from "./../entities/Price";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";

@Resolver()
export class PriceResolver {
    // Get all classes
    @Query(() => [Price])
    async allPrices(): Promise<Price[]> {
        const prices = await Price.find({
            relations: ["classes", "classes.tutor", "classes.tutor.user"],
        });

        return prices;
    }

    // Add new price
    @Mutation(() => Price)
    async newPrice(
        @Arg("options") options: PriceInput,
        @Arg("classID") classID: number
    ): Promise<Price> {
        const classes = await Classes.findOne({ where: { id: classID } });

        let price;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Price)
                .values({
                    ...options,
                    classes,
                })
                .returning("*")
                .execute();
            price = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return price;
    }
}
