import { EmailPasswordInput } from "src/resolvers/inputs";

export const validateLogin = (options: EmailPasswordInput) => {
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "Email inválido",
            },
        ];
    }

    if (!options.email || !options.password) {
        return [
            {
                field: "email",
                message: "Preencha o campo de Email",
            },
            {
                field: "password",
                message: "Preencha o campo de Senha",
            },
        ];
    }

    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "Senha muito curta!",
            },
        ];
    }

    return null;
};
