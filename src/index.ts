import "reflect-metadata";
import { createConnection } from "typeorm";
import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";

import { User } from "./entities/User";

const main = async () => {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        // logging: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [User],
        synchronize: true,
    }).then(() => {
        console.log("Database connected");
    });

    const app = express();
    const PORT = 4000 || process.env.PORT;

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false,
        }),
    });

    apolloServer.applyMiddleware({ app });

    app.use(express.json());

    app.get("/", (_, res) => {
        res.send("Hello");
    });

    app.listen(PORT, () => `Server running on port ${PORT}`);
};

main().catch((err) => {
    console.error(err);
});
