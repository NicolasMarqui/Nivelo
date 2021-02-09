require("dotenv").config();
import "reflect-metadata";
import { cookieDuration } from "./constants";
import { MyContext } from "./types";
import { createConnection } from "typeorm";
import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import mongoose from "mongoose";

// Resolvers
import { UserResolver } from "./resolvers/user";
import { TutorResolver } from "./resolvers/tutor";
import { TypeResolver } from "./resolvers/type";
import { ClassesResolver } from "./resolvers/classes";
import { PriceResolver } from "./resolvers/price";
import { CategoryResolver } from "./resolvers/category";
import { PlatformsResolver } from "./resolvers/platforms";
import { UserPlatformAccountResolver } from "./resolvers/userPlatformAccount";
import { FeedbackResolver } from "./resolvers/feedback";

// Entities
import { User } from "./entities/User";
import { Tutor } from "./entities/Tutor";
import { TutorType } from "./entities/TutorType";
import { Classes } from "./entities/Classes";
import { Price } from "./entities/Price";
import { Category } from "./entities/Category";
import { Platforms } from "./entities/Platforms";
import { UserPlatformAccount } from "./entities/UserPlatformAccount";
import { Feedback } from "./entities/Feedback";

import ScheduleSchema from "./models/Schedule";
import scheduleRouter from "./routes/schedule";

const main = async () => {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        // logging: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [
            User,
            Tutor,
            TutorType,
            Classes,
            Price,
            Category,
            Platforms,
            UserPlatformAccount,
            Feedback,
        ],
        synchronize: true,
    }).then(() => {
        console.log("Database connected");
    });

    await mongoose
        .connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB Connected");
        });

    // const test = {
    //     tutorID: 18,
    //     dates: [
    //         {
    //             month: "02",
    //             date: "02-12-2020",
    //             time: [
    //                 { from: "06:00", to: "09:00" },
    //                 { from: "12:00", to: "14:00" },
    //             ],
    //         },
    //     ],
    // } as any;

    // await ScheduleSchema.create(test);

    const app = express();
    const PORT = 4000 || process.env.PORT;

    // Initialize Redis
    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient({
        host: "localhost",
        auth_pass: "nick",
    });

    app.use(
        session({
            name: "qid",
            store: new RedisStore({ client: redisClient, disableTouch: true }),
            cookie: {
                maxAge: cookieDuration,
                httpOnly: true,
                sameSite: "lax",
                secure: false,
            },
            saveUninitialized: false,
            secret: "asjdnkjasdniuh3ru23ib2e2s2fsdver__)_)",
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver,
                TutorResolver,
                TypeResolver,
                ClassesResolver,
                PriceResolver,
                CategoryResolver,
                PlatformsResolver,
                UserPlatformAccountResolver,
                FeedbackResolver,
            ],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.use(express.json());
    app.use(scheduleRouter);

    app.get("/", (_, res) => {
        res.send("Hello");
    });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

main().catch((err) => {
    console.error(err);
});
