import { TutorInput } from "./../resolvers/inputs/index";

export const validateTutorInfo = (options: TutorInput) => {
    if (options.description.length > 1000) {
        return [
            {
                field: "description",
                message: "Description is too large",
            },
        ];
    }

    if (options.rating < 0 || options.rating > 5) {
        return [
            {
                field: "rating",
                message: "Rating value is not possible",
            },
        ];
    }

    return null;
};
