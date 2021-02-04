import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({ length: 250 })
    name: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    dateBirth!: string;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    sex!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    country!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    city!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    followersAmount!: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    avatar!: string;

    @Field({ nullable: true })
    @OneToOne(() => Tutor, (tutor) => tutor.user, { nullable: true })
    tutor: Tutor;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
