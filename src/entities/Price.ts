import { Classes } from "./Classes";
import { Field, Float, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";

@ObjectType()
@Entity()
export class Price extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    time: number;

    @Field(() => Float, { nullable: true })
    @Column({ type: "decimal", nullable: true })
    price: number;

    @Field(() => Classes, { nullable: true })
    @ManyToOne(() => Classes, (classes) => classes.price, { nullable: true })
    classes: Classes;

    @Field(() => Boolean, { nullable: true })
    @Column({ default: false, nullable: true })
    isPromotionalCode: boolean;

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    discountAmount: number;

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { nullable: true })
    @UpdateDateColumn()
    updatedAt: Date;
}
