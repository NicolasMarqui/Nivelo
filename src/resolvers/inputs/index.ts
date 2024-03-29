import { Feedback } from "./../../entities/Feedback";
import { Platforms } from "./../../entities/Platforms";
import { Category } from "./../../entities/Category";
import { Classes } from "./../../entities/Classes";
import { Price } from "../../entities/Price";
import { InputType, Field, Int, ObjectType, Float } from "type-graphql";
import { Any } from "typeorm";

@InputType()
export class UsernameEmailPasswordInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class EmailPasswordInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class MoreInfoUser {
    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    country: string;

    @Field({ nullable: true })
    name: string;
}

@InputType()
export class TutorInput {
    @Field({ nullable: true })
    description!: string;

    @Field({ nullable: true })
    rating!: number;

    @Field({ nullable: true })
    amountClasses: number;

    @Field({ nullable: true })
    amountStudents: number;

    @Field({ nullable: true })
    instructionalVideo!: string;
}

@InputType()
export class TypeInput {
    @Field()
    name: string;

    @Field()
    needsApproval: boolean;

    @Field()
    rules: string;
}

@InputType()
export class ClassesInput implements Partial<Classes> {
    @Field(() => String, { nullable: true })
    name: string;

    @Field(() => Int, { nullable: true })
    amountTimeTaught: number;

    @Field(() => String, { nullable: true })
    level!: string;

    @Field({ nullable: true })
    description!: string;
}

@InputType()
export class PriceInput {
    @Field(() => Int, { nullable: true })
    time: number;

    @Field({ nullable: true })
    price: string;

    @Field(() => Boolean)
    isPromotionalCode: boolean;

    @Field(() => Int, { nullable: true })
    discountAmount: number;
}

@InputType()
export class CategoryInput implements Partial<Category> {
    @Field(() => String, { nullable: true })
    name: string;

    @Field(() => String, { nullable: true })
    icon!: string;
}

@InputType()
export class PlatformsInput implements Partial<Platforms> {
    @Field(() => String, { nullable: true })
    name: string;

    @Field(() => String, { nullable: true })
    icon!: string;
}

@InputType()
export class FeedbackInput implements Partial<Feedback> {
    @Field(() => String, { nullable: true })
    content!: string;

    @Field(() => Int, { nullable: true })
    rating!: number;
}

@InputType()
export class OrderInput {
    @Field(() => Int, { nullable: true })
    classID: number;

    @Field(() => String)
    date: String;

    @Field(() => String)
    horario: String;

    @Field(() => String)
    classDuration: String;

    @Field({ nullable: true })
    classPrice: string;

    @Field(() => Int, { nullable: true })
    platformId: number;

    @Field(() => String)
    userAccount: String;
}
