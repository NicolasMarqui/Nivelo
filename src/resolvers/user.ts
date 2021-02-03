import { EmailPasswordInput } from "./inputs/index";
import { validateRegister } from "./../utils/validateRegister";
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { User } from "./../entities/User";
import argon2 from "argon2";
import { UsernameEmailPasswordInput } from "./inputs";
import { getConnection } from "typeorm";
import jwt from "jsonwebtoken";
import { validateLogin } from "../utils/validateLogin";

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class UserResolver {
    // GET all Users
    @Query(() => [User])
    allUsers(): Promise<User[]> | [] {
        const allUsers = User.find();

        return allUsers;
    }

    // Register new User
    @Mutation(() => UserResponse)
    async signup(
        @Arg("options") options: UsernameEmailPasswordInput
    ): Promise<UserResponse> {
        // Check if it has any errors
        const errors = validateRegister(options);

        if (errors) {
            return { errors };
        }

        // Check if email already exists
        const hasEmail = await User.findOne({
            where: { email: options.email },
        });
        if (hasEmail) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Email is not available",
                    },
                ],
            };
        }

        const hashedPassword = await argon2.hash(options.password);

        let user;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    name: options.name,
                    email: options.email,
                    password: hashedPassword,
                })
                .returning("*")
                .execute();
            user = result.raw[0];
        } catch (err) {
            if (err.code === "23505") {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Email already taken",
                        },
                    ],
                };
            }
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD"
        );

        console.log(token);

        return { user };
    }

    // Login a User
    @Mutation(() => UserResponse)
    async login(
        @Arg("options") options: EmailPasswordInput
    ): Promise<UserResponse> {
        const errors = validateLogin(options);

        if (errors) {
            return { errors };
        }

        const user = await User.findOne({ where: { email: options.email } });
        if (!user) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Credentials do not match",
                    },
                ],
            };
        }

        const verifyPassword = await argon2.verify(
            user.password,
            options.password
        );
        console.log(verifyPassword);
        if (!verifyPassword) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Credentials do not match",
                    },
                ],
            };
        }

        return { user };
    }
}
