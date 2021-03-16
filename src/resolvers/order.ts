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
    Int,
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

@ObjectType()
class OrderDetailsAmount {
    @Field(() => [Order], { nullable: true })
    order?: Order[] | [];

    @Field(() => Int, { defaultValue: 0 })
    amount?: Number;
}

@Resolver()
export class OrderResolver {
    // Get all orders by user
    @Query(() => OrderDetailsAmount)
    @UseMiddleware(isAuth)
    async getUserOrders(
        @Arg("userID") userId: number,
        @Arg("page", () => Int) page: number
    ): Promise<OrderDetailsAmount | []> {
        const realLimit = 5;
        let realOffset = 0;

        if (page > 0) {
            realOffset = (page - 1) * realLimit;
        }

        const user = await User.findOne({ where: { id: userId } });
        const totalOrders = await Order.find({ where: { user } });

        const result = await getConnection()
            .getRepository(Order)
            .createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .where("user.id = :user", { user: user?.id })
            .take(realLimit)
            .skip(realOffset)
            .orderBy("order.createdAt", "DESC")
            .getMany();

        return {
            order: result,
            amount: totalOrders.length,
        };
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

    // Get order details
    @Query(() => Order)
    async orderDetail(@Arg("id") id: string): Promise<Order | undefined> {
        const order = await getConnection()
            .getRepository(Order)
            .createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .where("order.id = :id", { id })
            .getOne();

        return order;
    }
}
