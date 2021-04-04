import { UsernameEmailPasswordInput } from "src/resolvers/inputs";

export const validateRegister = (options: UsernameEmailPasswordInput) => {
    if (!options.email || !options.name || !options.password) {
        return [
            {
                field: "email",
                message: "Campo Email não pode ser vazio",
            },
            {
                field: "username",
                message: "Campo Nome não pode ser vazio",
            },
            {
                field: "password",
                message: "Campo Senha não pode ser vazio",
            },
        ];
    }

    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "Email inválido",
            },
        ];
    }

    if (options.name.includes("@")) {
        return [
            {
                field: "name",
                message: "Nome não pode incluir '@'",
            },
        ];
    }

    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "Senha precisa ser maior",
            },
        ];
    }

    return null;
};
