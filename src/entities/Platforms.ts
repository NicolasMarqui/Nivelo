import { User } from "./User";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
} from "typeorm";
import { UserPlatformAccount } from "./UserPlatformAccount";

@ObjectType()
@Entity()
export class Platforms extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { nullable: true })
    @Column({ length: 500 })
    name: string;

    @Field(() => String, { nullable: true })
    @Column("text", { nullable: true })
    icon: string;

    @Field(() => String, { nullable: true })
    @Column("text", { nullable: true })
    account: string;

    @Field(() => [User], { nullable: true })
    @ManyToMany(() => User, (user) => user.platforms, {
        nullable: true,
    })
    users: User[];

    @Field(() => UserPlatformAccount, { nullable: true })
    @OneToMany(() => UserPlatformAccount, (acc) => acc.platform, {
        cascade: true,
    })
    public userPlatformAccount!: UserPlatformAccount[];
}
