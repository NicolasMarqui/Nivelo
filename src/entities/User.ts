import { Classes } from "./Classes";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToOne,
    ManyToMany,
    JoinTable,
    OneToMany,
} from "typeorm";
import { Tutor } from "./Tutor";
import { Platforms } from "./Platforms";
import { UserPlatformAccount } from "./UserPlatformAccount";
import { Feedback } from "./Feedback";

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

    @Field(() => Tutor, { nullable: true })
    @OneToOne(() => Tutor, (tutor) => tutor.user, {
        nullable: true,
        cascade: true,
    })
    tutor: Tutor;

    @Field(() => [Platforms], { nullable: true })
    @ManyToMany(() => Platforms, (plat) => plat.users, {
        nullable: true,
        cascade: true,
    })
    @JoinTable()
    platforms: Platforms[];

    @Field(() => [Classes], { nullable: true })
    @ManyToMany(() => Classes, (cl) => cl.users, {
        nullable: true,
        cascade: true,
    })
    @JoinTable()
    classes: Classes[];

    @Field(() => [UserPlatformAccount], { nullable: true })
    @OneToMany(() => UserPlatformAccount, (acc) => acc.user, { cascade: true })
    public userPlatformAccount!: UserPlatformAccount[];

    @Field(() => [Feedback], { nullable: true })
    @OneToMany(() => Feedback, (feed) => feed.user, { nullable: true })
    feedback: Feedback[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
