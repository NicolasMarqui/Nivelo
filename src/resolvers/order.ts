import { OrderInput } from "./inputs/index";
import { isAuth } from "./../middleware/index";
import { Order } from "../entities/Order";
import {
    ObjectType,
    Field,
    Resolver,
    UseMiddleware,
    Arg,
    Query,
    Mutation,
} from "type-graphql";
import { FieldError } from "./helpers";
import { getConnection } from "typeorm";
import { User } from "../entities/User";

@ObjectType()
class OrderResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Order, { nullable: true })
    order?: Order;
}

@Resolver()
export class OrderResolver {
    // Get all orders by user
    @Query(() => [Order])
    @UseMiddleware(isAuth)
    async getUserOrders(@Arg("userID") userId: number): Promise<Order[] | []> {
        const user = await User.findOne({ where: { id: userId } });

        const order = await Order.find({
            where: { user },
            relations: ["user"],
        });

        return order;
    }

    // Create a new order
    @Mutation(() => OrderResponse)
    async createNewOrder(
        @Arg("userID") userId: number,
        @Arg("options") options: OrderInput
    ): Promise<OrderResponse> {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Usuário não encontrado",
                    },
                ],
            };
        }

        let order;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Order)
                .values({
                    ...options,
                    user,
                })
                .returning("*")
                .execute();
            order = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { order };
    }
}
