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

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    classID: number;

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

    @Field(() => Float, { nullable: true })
    @Column({ type: "decimal", nullable: true })
    classPrice: number;

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

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
