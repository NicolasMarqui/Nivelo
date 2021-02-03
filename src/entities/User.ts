import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
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

    @Field()
    @Column({ nullable: true })
    dateBirth!: string;

    @Field()
    @Column("text", { nullable: true })
    description!: string;

    @Field()
    @Column({ nullable: true })
    sex!: string;

    @Field()
    @Column({ nullable: true })
    country!: string;

    @Field()
    @Column({ nullable: true })
    city!: string;

    @Field()
    @Column({ nullable: true })
    followersAmount!: number;

    @Field()
    @Column({ nullable: true })
    avatar!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
