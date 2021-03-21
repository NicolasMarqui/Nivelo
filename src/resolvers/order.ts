import { Classes } from "../entities/Classes";
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
            .leftJoinAndSelect("order.classes", "classes")
            .leftJoinAndSelect("classes.price", "price")
            .leftJoinAndSelect("classes.tutor", "tutor")
            .leftJoinAndSelect("tutor.user", "")
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

        const classObj = await Classes.findOne({
            where: { id: options.classID },
        });

        if (!classObj) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "Aula não encontrada",
                    },
                ],
            };
        }

        const {
            classDuration,
            classPrice,
            platformId,
            date,
            userAccount,
        } = options;

        let order;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Order)
                .values({
                    user,
                    classes: classObj,
                    classDuration,
                    classPrice,
                    platformId,
                    date,
                    userAccount,
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
            .leftJoinAndSelect("order.classes", "classes")
            .leftJoinAndSelect("classes.price", "price")
            .leftJoinAndSelect("classes.tutor", "tutor")
            .leftJoinAndSelect("tutor.user", "")
            .where("order.id = :id", { id })
            .getOne();

        return order;
    }

    // Get orders awaiting for tutor approval
    @Query(() => [Order])
    async ordersTutorAwaitingApproval(
        @Arg("tutorId") tutorId: number
    ): Promise<Order[] | []> {
        const result = await getConnection()
            .getRepository(Order)
            .createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .leftJoinAndSelect("order.classes", "classes")
            .leftJoinAndSelect("classes.price", "price")
            .leftJoinAndSelect("classes.tutor", "tutor")
            .leftJoinAndSelect("tutor.user", "")
            .where("classes.tutor.id = :id", { id: tutorId })
            .andWhere("order.isOrderAproved = :cons", { cons: false })
            .orderBy("order.createdAt", "DESC")
            .getMany();

        return result;
    }

    // Make order approved
    @Mutation(() => Order)
    async makeOrderApproved(
        @Arg("orderID") orderID: string
    ): Promise<Order | undefined> {
        let order;
        let orderRel;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Order)
                .set({ isOrderAproved: true })
                .where("id = :id", { id: orderID })
                .returning("*")
                .execute();

            order = result.raw[0];

            orderRel = await Order.findOne({
                where: { id: order.id },
                relations: [
                    "user",
                    "classes",
                    "classes.price",
                    "classes.tutor",
                    "classes.tutor.user",
                ],
            });
        } catch (err) {
            console.log(err);
        }

        return orderRel;
    }
}
