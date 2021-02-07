import { Platforms } from "./../../entities/Platforms";
import { Category } from "./../../entities/Category";
import { Classes } from "./../../entities/Classes";
import { Price } from "../../entities/Price";
import { InputType, Field, Int, ObjectType, Float } from "type-graphql";

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
    dateBirth: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    sex: string;

    @Field({ nullable: true })
    country: string;

    @Field({ nullable: true })
    city: string;

    @Field({ nullable: true })
    avatar: string;
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

    @Field(() => Float, { nullable: true })
    price: number;

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
