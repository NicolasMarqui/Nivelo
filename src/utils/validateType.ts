import { TypeInput } from "./../resolvers/inputs/index";

export const validateType = (options: TypeInput) => {
    if (options.name.length < 2) {
        return [
            {
                field: "name",
                message: "Name is too small",
            },
        ];
    }

    return null;
};
