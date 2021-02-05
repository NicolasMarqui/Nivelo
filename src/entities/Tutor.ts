import { Field, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { TutorType } from "./TutorType";

@ObjectType()
@Entity()
export class Tutor extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => User, { nullable: true })
    @OneToOne(() => User, (user) => user.tutor)
    @JoinColumn()
    user: User;

    @Field(() => TutorType, { nullable: true })
    @ManyToOne(() => TutorType, (type) => type.tutor, {
        nullable: true,
        cascade: true,
    })
    type: TutorType;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description!: string;

    @Field(() => Int, { nullable: true })
    @Column({ type: "float", default: 0 })
    rating: number;

    @Field(() => Int, { nullable: true })
    @Column({ default: 0 })
    amountClasses: number;

    @Field(() => Int, { nullable: true })
    @Column({ default: 0 })
    amountStudents: number;

    @Field({ nullable: true })
    @Column({ nullable: true, type: "text" })
    instructionalVideo!: string;

    // Add foreign key to class

    // Add foreign key to platforms

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { nullable: true })
    @UpdateDateColumn()
    updatedAt: Date;
}
