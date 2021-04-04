import { ClassesInput } from "src/resolvers/inputs";

export const validateClasses = (options: ClassesInput) => {
    if (options.description && options.description.length > 2000) {
        return [
            {
                field: "description",
                message: "Descrição é muito longa",
            },
        ];
    }

    if (options.name && options.name.includes("@")) {
        return [
            {
                field: "name",
                message: "Nome não pode incluir '@'",
            },
        ];
    }

    if (options.name === "") {
        return [
            {
                field: "name",
                message: "Nome não pode ser vazio!",
            },
        ];
    }

    if (options.level === "") {
        return [
            {
                field: "level",
                message: "Por favor selecione um nível",
            },
        ];
    }

    return null;
};
