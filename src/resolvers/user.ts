import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
    @Mutation(() => String)
    login() {
        return "hello world";
    }
}
