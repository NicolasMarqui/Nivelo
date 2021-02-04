import { validateNewInfo } from "./../utils/validateNewInfo";
import { isAuth } from "../middleware";
import { cookieDuration, COOKIE_NAME } from "../constants";
import { MyContext } from "./../types";
import { EmailPasswordInput, MoreInfoUser } from "./inputs";
import { validateRegister } from "./../utils/validateRegister";
import {
    Arg,
    Ctx,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { User } from "./../entities/User";
import argon2 from "argon2";
import { UsernameEmailPasswordInput } from "./inputs";
import { getConnection } from "typeorm";
import jwt from "jsonwebtoken";
import { validateLogin } from "../utils/validateLogin";

@ObjectType()
export class FieldError {
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
        const allUsers = User.find({ relations: ["tutor"] });

        return allUsers;
    }

    // Get current logged in User
    @Query(() => User, { nullable: true })
    async me(@Ctx() { req }: MyContext) {
        if (!req.session.user) {
            return null;
        }

        const userInfo = jwt.verify(
            // @ts-ignore: Unreachable code error
            req.session.user,
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD"
        );

        // @ts-ignore: Unreachable code error
        const user = await User.findOne({ where: { id: userInfo.id } });

        if (!user) return null;

        return user;
    }

    // Register new User
    @Mutation(() => UserResponse)
    async signup(
        @Arg("options") options: UsernameEmailPasswordInput,
        @Ctx() { req }: MyContext
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
            },
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD",
            { expiresIn: cookieDuration }
        );

        req.session.user = token;

        return { user };
    }

    // Login a User
    @Mutation(() => UserResponse)
    async login(
        @Arg("options") options: EmailPasswordInput,
        @Ctx() { req }: MyContext
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

        const token = jwt.sign(
            {
                id: user.id,
            },
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD",
            { expiresIn: cookieDuration }
        );

        req.session.user = token;

        return { user };
    }

    // Log a User out
    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
        return new Promise((resolve) =>
            req.session.destroy((err) => {
                res.clearCookie(COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }

    // Save rest of the User info
    @Mutation(() => UserResponse)
    @UseMiddleware(isAuth)
    async addMoreInfo(
        @Arg("id") id: Number,
        @Arg("options") options: MoreInfoUser
    ): Promise<UserResponse> {
        const errors = validateNewInfo(options);
        if (errors) {
            return { errors };
        }

        const { dateBirth, description, sex, country, city, avatar } = options;

        let user;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({
                    dateBirth,
                    description,
                    sex,
                    country,
                    city,
                    avatar,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();
            user = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { user };
    }
}
