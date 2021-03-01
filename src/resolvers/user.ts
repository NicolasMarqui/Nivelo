import { UserPlatformAccount } from "./../entities/UserPlatformAccount";
import { validateNewInfo } from "./../utils/validateNewInfo";
import { isAuth } from "../middleware";
// prettier-ignore
import { cookieDuration, COOKIE_NAME, FORGET_PASSWORD_PREFIX,} from "../constants";
import { MyContext } from "./../types";
import { EmailPasswordInput, MoreInfoUser } from "./inputs";
import { validateRegister } from "./../utils/validateRegister";
// prettier-ignore
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import { User } from "./../entities/User";
import argon2 from "argon2";
import { UsernameEmailPasswordInput } from "./inputs";
import { getConnection } from "typeorm";
import jwt from "jsonwebtoken";
import { validateLogin } from "../utils/validateLogin";
import { FieldError } from "./helpers";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";

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
        const allUsers = User.find({
            relations: [
                "tutor",
                "tutor.type",
                "platforms",
                "userPlatformAccount",
                "userPlatformAccount.platform",
                "feedback",
                "classes",
            ],
        });

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

        const user = await User.findOne({
            // @ts-ignore: Unreachable code error
            where: { id: userInfo.id },
            relations: [
                "tutor",
                "tutor.type",
                "platforms",
                "userPlatformAccount",
                "userPlatformAccount.platform",
                "feedback",
            ],
        });

        if (!user) return null;

        return user;
    }

    // Change password
    @Mutation(() => UserResponse)
    async changePassword(
        @Arg("token") token: string,
        @Arg("newPassword") newPassword: string,
        @Ctx() { redis, req }: MyContext
    ): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "Senha muito curta",
                    },
                ],
            };
        }

        const key = FORGET_PASSWORD_PREFIX + token;
        const userId = redis.get(key);
        if (!userId) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "Token expirado",
                    },
                ],
            };
        }

        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "Usuário não encontrado",
                    },
                ],
            };
        }

        user.password = await argon2.hash(newPassword);
        await user.save();

        redis.del(key);

        const JWT_token = jwt.sign(
            {
                id: user.id,
            },
            "ASIAHS986378923H2JVBJAK___0-902E212EI12EOIBJKAD",
            { expiresIn: cookieDuration }
        );

        req.session.user = JWT_token;

        return { user };
    }

    // Forgot password
    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg("email") email: string,
        @Ctx() { redis }: MyContext
    ): Promise<Boolean> {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return true;
        }

        const token = v4();

        await redis.set(
            FORGET_PASSWORD_PREFIX + token,
            user.id,
            "ex",
            1000 * 60 * 60 * 24 * 3
        ); // 3 days

        await sendEmail(
            email,
            `<a href="http://localhost:3000/change-password/${token}">Alterar sua senha</a>`,
            "Alterar sua senha"
        );

        return true;
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

        const { description, country, name } = options;

        let user;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({
                    name,
                    description,
                    country,
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

    // Get a single User
    @Query(() => UserResponse)
    async singleUser(@Arg("id") id: number): Promise<UserResponse | undefined> {
        const user = await User.findOne({
            where: { id },
            relations: [
                "tutor",
                "tutor.type",
                "platforms",
                "userPlatformAccount",
                "userPlatformAccount.platform",
                "feedback",
            ],
        });

        if (!user) {
            return {
                errors: [
                    {
                        field: "general",
                        message: "User not found...",
                    },
                ],
            };
        }

        return { user };
    }

    // Change user avatar
    @Mutation(() => UserResponse)
    async changeAvatar(
        @Arg("id") id: number,
        @Arg("avatar") avatar: string
    ): Promise<UserResponse> {
        if (!avatar) {
            return {
                errors: [
                    {
                        field: "avatar",
                        message: "Algo deu errado!",
                    },
                ],
            };
        }

        let user;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({
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

    @Query(() => String, { nullable: true })
    async userHasPlatform(
        @Arg("platformId") platformId: number,
        @Arg("userId") userId: number
    ): Promise<String | null> {
        const user = await User.findOne({
            where: { id: userId },
            relations: ["userPlatformAccount", "userPlatformAccount.platform"],
        });

        if (!user) return null;

        let platforms = null;

        const hasAccount = user.userPlatformAccount.map((plat) => {
            if (plat.platform.id === platformId) {
                platforms = plat.account;
            }
        });

        if (!hasAccount || hasAccount.length === 0 || hasAccount === [])
            return null;

        return platforms;
    }
}
