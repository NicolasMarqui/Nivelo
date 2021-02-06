import { ClassesInput } from "src/resolvers/inputs";

export const validateClasses = (options: ClassesInput) => {
    if (options.description && options.description.length > 2000) {
        return [
            {
                field: "description",
                message: "Description is too big.",
            },
        ];
    }

    if (options.name.includes("@")) {
        return [
            {
                field: "name",
                message: "Name cannot include an @",
            },
        ];
    }

    return null;
};
