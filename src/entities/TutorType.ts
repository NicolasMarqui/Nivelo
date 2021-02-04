// import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

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

    // @OneToMany(() => Tutor, (tutor) => tutor.tutorTypeId)
    // type: Tutor[];
}
