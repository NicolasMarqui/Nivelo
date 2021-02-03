import { InputType, Field } from "type-graphql";

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
