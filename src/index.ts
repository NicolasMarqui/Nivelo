require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
import "reflect-metadata";
import path from "path";
import { cookieDuration } from "./constants";
import { MyContext } from "./types";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import mongoose from "mongoose";
import cors from "cors";

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
import { OrderResolver } from "./resolvers/order";
import { HourResolver } from "./resolvers/hour";

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
import { Order } from "./entities/Order";
import { Hour } from "./entities/Hour";

import scheduleRouter from "./routes/schedule";

const main = async () => {
    process.env.TZ = "America/Sao_Paulo";
    // @ts-ignore
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    await createConnection({
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        // database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        // ssl: process.env.NODE_ENV?.includes("production"),
        // extra: {
        //     ssl: {
        //         rejectUnauthorized: false,
        //     },
        // },
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
            Order,
            Hour,
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

    const app = express();
    const PORT = process.env.PORT || 4000;

    // Initialize Redis
    const RedisStore = connectRedis(session);
    const redisOptions = process.env.NODE_ENV?.includes("development")
        ? {
              host: process.env.REDIS_HOST,
              password: process.env.REDIS_PASSWORD,
              port: process.env.REDIS_PORT,
              db: 0,
              tls: {
                  ignoreUnauthorized: false,
              },
          }
        : process.env.REDIS_TLS_URL;

    // @ts-ignore
    const redis = new Redis(redisOptions, {
        tls: {
            ignoreUnauthorized: false,
        },
    });

    app.use(
        cors({
            origin: process.env.URL,
            credentials: true,
        })
    );

    if (process.env.NODE_ENV?.includes("production")) {
        app.set("trust proxy", 1); // trust first proxy
    }

    app.use(
        session({
            name: "qid",
            store: new RedisStore({ client: redis as any, disableTouch: true }),
            cookie: {
                maxAge: cookieDuration,
                httpOnly: process.env.NODE_ENV?.includes("production"),
                sameSite: "lax",
                secure: process.env.NODE_ENV?.includes("production"),
            },
            saveUninitialized: false,
            secret: "asjdnkjasdniuh3ru23ib2e2s2fsdver__)_)",
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        // Make playground available in production
        playground: true,
        introspection: true,
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
                OrderResolver,
                HourResolver,
            ],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.use(express.json());
    app.use(scheduleRouter);

    app.get("/", (_, res) => {
        res.send("Welcome to Nivelo's API, please leave");
    });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

main().catch((err) => {
    console.error(err);
});
