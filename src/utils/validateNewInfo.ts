import { MoreInfoUser } from "./../resolvers/inputs/index";

export const validateNewInfo = (options: MoreInfoUser) => {
    if (options.description.length > 500) {
        return [
            {
                field: "description",
                message: "Cannot have more than 500 characters",
            },
        ];
    }

    return null;
};
