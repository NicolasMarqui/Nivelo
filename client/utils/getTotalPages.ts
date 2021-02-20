export const getTotalPages = (total: number, limit: number): number => {
    if (total <= limit) {
        return 1;
    }

    console.log(Math.ceil(total / limit));

    return Math.ceil(total / limit);
};
