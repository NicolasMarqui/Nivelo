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

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    price: string;

    @Field(() => Classes, { nullable: true })
    @ManyToOne(() => Classes, (classes) => classes.price, {
        nullable: true,
        onDelete: "CASCADE",
    })
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
