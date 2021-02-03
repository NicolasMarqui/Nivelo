import { UsernameEmailPasswordInput } from "src/resolvers/inputs";

export const validateRegister = (options: UsernameEmailPasswordInput) => {
    if (!options.email || !options.name || !options.password) {
        return [
            {
                field: "email",
                message: "Email cannot be empty",
            },
            {
                field: "username",
                message: "Name cannot be empty",
            },
            {
                field: "password",
                message: "Password cannot be empty",
            },
        ];
    }

    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "Invalid email ",
            },
        ];
    }

    if (options.name.includes("@")) {
        return [
            {
                field: "username",
                message: "Name cannot include an @",
            },
        ];
    }

    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "Length must be greater than 2",
            },
        ];
    }

    return null;
};
