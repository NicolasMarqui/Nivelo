import { Field, Float, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { TutorType } from "./TutorType";
import { Classes } from "./Classes";
import { Category } from "./Category";

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

    @Field(() => Float, { nullable: true })
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

    @Field(() => [Classes], { nullable: true })
    @OneToMany(() => Classes, (classes) => classes.tutor)
    classes: Classes[];

    @Field(() => [Category], { nullable: true })
    @ManyToMany(() => Category, (cat) => cat.tutors, { nullable: true })
    @JoinTable()
    categories: Category[];

    @Field(() => [String], { nullable: true })
    @Column({ nullable: true, type: "text" })
    availability: String[];

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { nullable: true })
    @UpdateDateColumn()
    updatedAt: Date;
}
