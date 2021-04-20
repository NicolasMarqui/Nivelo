module.exports = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    cli: {
        migrationsDir: "src/migrations",
    },
};
