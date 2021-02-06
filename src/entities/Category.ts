import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({ length: 250 })
    name: string;

    @Field(() => String, { nullable: true })
    @Column("text", { nullable: true })
    icon: string;

    @Field(() => [Tutor], { nullable: true })
    @ManyToMany(() => Tutor, (tutor) => tutor.categories, { nullable: true })
    tutors: Tutor[];
}
