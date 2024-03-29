import { Field, Float, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Classes } from "./Classes";
import { User } from "./User";

@ObjectType()
@Entity()
export class Order extends BaseEntity {
    @Field(() => String, { nullable: true })
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @Field(() => Classes, { nullable: true })
    @ManyToOne(() => Classes, (classes) => classes.orders, {
        nullable: true,
        onDelete: "CASCADE",
    })
    classes: Classes;

    @Field(() => String)
    @Column()
    date: String;

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    platformId: number;

    @Field(() => String)
    @Column()
    classDuration: String;

    @Field(() => String)
    @Column()
    userAccount: String;

    @Field(() => String, { nullable: true })
    @Column("text", { nullable: true })
    horario: String;

    @Field({ nullable: true })
    @Column({ nullable: true })
    classPrice: string;

    @Field(() => Boolean, { defaultValue: false })
    @Column({ default: false })
    isOrderAproved: boolean;

    @Field(() => Boolean, { defaultValue: false })
    @Column({ default: false })
    hasTutorConfirmedClassDone: boolean;

    @Field(() => Boolean, { defaultValue: false })
    @Column({ default: false })
    hasUserConfirmedClassDone: boolean;

    @Field(() => Boolean, { defaultValue: false })
    @Column({ default: false })
    isPaid: boolean;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    paymentDetails: String;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    stripeClient: String;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
