import { Classes } from "./../entities/Classes";
import { PriceInput } from "./inputs/index";
import { Price } from "./../entities/Price";
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { getConnection } from "typeorm";
import { FieldError } from "./helpers";

@ObjectType()
class PriceResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Price, { nullable: true })
    price?: Price;
}
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

    // Get All prices by classes
    @Query(() => [Price] || [])
    async allPricesClass(
        @Arg("classID") classID: number
    ): Promise<Price[] | []> {
        const sClass = await Classes.findOne({ where: { id: classID } });

        if (!sClass) {
            return [];
        }

        const prices = await Price.find({
            where: { classes: sClass },
            relations: ["classes", "classes.tutor", "classes.tutor.user"],
        });

        return prices;
    }

    // Add new price
    @Mutation(() => PriceResponse)
    async newPrice(
        @Arg("options") options: PriceInput,
        @Arg("classID") classID: number
    ): Promise<PriceResponse> {
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

        return { price };
    }

    // Update Price
    @Mutation(() => PriceResponse)
    async updatePrice(
        @Arg("options") options: PriceInput,
        @Arg("id") id: number
    ): Promise<PriceResponse> {
        let price;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Price)
                .set({
                    ...options,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();

            price = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { price };
    }

    // Delete Price
    @Mutation(() => Boolean)
    async deletePrice(@Arg("id") id: number): Promise<Boolean> {
        const priceToDelete = await getConnection()
            .createQueryBuilder()
            .createQueryBuilder()
            .delete()
            .from(Price)
            .where("id = :id", { id })
            .execute();

        if (priceToDelete.affected) {
            return priceToDelete.affected > 0 ? true : false;
        }

        return false;
    }
}
