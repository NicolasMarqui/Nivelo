import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Feedback extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { nullable: true })
    @Column("text", { nullable: true })
    content: string;

    @Field(() => Int, { nullable: true })
    @Column({ default: 0, nullable: true })
    rating: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.feedback)
    user: User;

    @Field(() => Int)
    @Column()
    tutorID: number;

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;
}
