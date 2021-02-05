import { Price } from "./Price";
import { Tutor } from "./Tutor";
import { Field, Int, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class Classes extends BaseEntity {
    @Field(() => Int, { nullable: true })
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Field(() => String)
    @Column({ length: 500 })
    name: string;

    @Field(() => Tutor, { nullable: true })
    @ManyToOne(() => Tutor, (tutor) => tutor.classes, { cascade: true })
    tutor: Tutor;

    @Field(() => Int, { nullable: true })
    @Column({ default: 0 })
    amountTime: number;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    level: string;

    // CategoryID

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description!: string;

    @Field(() => Price, { nullable: true })
    @OneToMany(() => Price, (price) => price.classes, {
        cascade: true,
        nullable: true,
    })
    price: Price[];

    @Field(() => String, { nullable: true })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { nullable: true })
    @UpdateDateColumn()
    updatedAt: Date;
}
