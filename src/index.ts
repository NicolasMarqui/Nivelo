import path from "path";
import { createConnection } from "typeorm";

const main = async () => {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        logging: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [],
        synchronize: true,
    }).then(() => {
        console.log("Database connected");
    });
};

main();
