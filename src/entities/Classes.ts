import { Price } from "./Price";
import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Classes extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { nullable: true })
    @Column({ length: 500 })
    name: string;

    @Field(() => Tutor, { nullable: true })
    @ManyToOne(() => Tutor, (tutor) => tutor.classes, { cascade: true })
    tutor: Tutor;

    @Field(() => Int, { nullable: true })
    @Column({ default: 0 })
    amountTimeTaught: number;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    level: string;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description!: string;

    @Field(() => [Price], { nullable: true })
    @OneToMany(() => Price, (price) => price.classes, {
        cascade: true,
        nullable: true,
    })
    price: Price[];

    @Field(() => [User], { nullable: true })
    @ManyToMany(() => User, (user) => user.classes, {
        nullable: true,
    })
    users: User[];

    @Field(() => Boolean, { nullable: true })
    @Column({ default: true, nullable: true })
    active: Boolean;

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { nullable: true })
    @UpdateDateColumn()
    updatedAt: Date;
}
