interface CategoriesContent {
    id: number;
    name: string;
    icon?: string | null;
}

export const getCategoriesFromArray = (
    arr: CategoriesContent[]
): string | null => {
    const prefix = "Ensina ";

    if (!arr) return null;
    const names = [];

    arr.map((cat) => {
        names.push(cat.name);
    });

    console.log(names);

    return prefix;
};
