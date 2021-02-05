import { Tutor } from "./Tutor";
// import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class TutorType extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({ length: 250 })
    name: string;

    @Field(() => Boolean)
    @Column()
    needsApproval: boolean;

    @Field(() => String)
    @Column({ type: "text" })
    rules: string;

    @Field(() => Tutor, { nullable: true })
    @OneToMany(() => Tutor, (tutor) => tutor.type, {
        nullable: true,
    })
    tutor: Tutor[];
}
