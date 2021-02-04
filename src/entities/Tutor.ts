// import { TutorType } from "./TutorType";
import { User } from "./User";
import { Field, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Tutor extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => User, { nullable: true })
    @OneToOne(() => User, (user) => user.tutor)
    @JoinColumn()
    user: User;

    // @Field(() => Int)
    // @ManyToOne(() => TutorType, (tutor) => tutor.type)
    // tutorTypeId: TutorType;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description!: string;

    @Field(() => Int)
    @Column({ type: "float", default: 0 })
    rating: number;

    @Field(() => Int)
    @Column({ default: 0 })
    amountClasses: number;

    @Field(() => Int)
    @Column({ default: 0 })
    amountStudents: number;

    @Field({ nullable: true })
    @Column({ nullable: true, type: "text" })
    instructionalVideo!: string;

    // Add foreign key to class

    // Add foreign key to platforms

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
