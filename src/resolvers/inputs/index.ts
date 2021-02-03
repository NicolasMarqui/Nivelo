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
