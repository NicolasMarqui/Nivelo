import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    Column,
    ManyToOne,
    PrimaryGeneratedColumn,
    BaseEntity,
} from "typeorm";
import { Platforms } from "./Platforms";
import { User } from "./User";

@ObjectType()
@Entity()
export class UserPlatformAccount extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn()
    public userPlatformAccount!: number;

    @Field(() => Int, { nullable: true })
    @Column()
    public userId!: number;

    @Field(() => Int, { nullable: true })
    @Column()
    public platformId!: number;

    @Field(() => String, { nullable: true })
    @Column()
    public account!: string;

    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, (user) => user.userPlatformAccount)
    public user!: User;

    @Field(() => Platforms, { nullable: true })
    @ManyToOne(() => Platforms, (plat) => plat.account)
    public platform!: Platforms;
}
