interface CategoriesContent {
    id?: number;
    name?: string;
    icon?: string | null;
}

export const getCategoriesFromArray = (arr: CategoriesContent[]) => {
    return arr.map((cat, idx) => {
        return (
            <span key={cat.id}>
                {idx === arr.length - 1 && idx !== 0
                    ? " e "
                    : idx === 0
                    ? "  "
                    : " , "}
                {cat.name}
            </span>
        );
    });
};
