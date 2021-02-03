import { EmailPasswordInput } from "src/resolvers/inputs";

export const validateLogin = (options: EmailPasswordInput) => {
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "Invalid email ",
            },
        ];
    }

    if (!options.email || !options.password) {
        return [
            {
                field: "email",
                message: "Email cannot be empty",
            },
            {
                field: "password",
                message: "Password cannot be empty",
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
