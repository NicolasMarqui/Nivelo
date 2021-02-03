import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    dateBirth: string;

    @Column("text", { nullable: true })
    description: string;

    @Column()
    sex: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    followersAmount: number;

    @Column()
    avatar: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
