import { Field, Int, ObjectType } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Hour extends BaseEntity {
    @Field(() => String, { nullable: true })
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Field(() => Int)
    @Column()
    tutorID: number;

    @Field(() => String)
    @Column()
    date: string;

    @Field(() => String)
    @Column()
    from: string;

    @Field(() => String)
    @Column()
    to: string;
}
