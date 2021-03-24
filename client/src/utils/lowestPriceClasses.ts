import { ClassesProps, PriceProps } from "@types";

export const lowestPriceClasses = (prices: PriceProps[] | []): number => {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;

    if (prices === null || !prices) return 0.0;

    for (let i = prices.length - 1; i >= 0; i--) {
        tmp = prices[i].price;
        if (tmp < lowest) lowest = tmp;
    }

    return lowest;
};

export const lowestPriceAval = (classes: ClassesProps[] | []): number => {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;

    if (classes === null || !classes) return 0.0;

    for (let i = classes.length - 1; i >= 0; i--) {
        if (classes[i].price && classes[i].price !== null) {
            for (let j = classes[i].price.length - 1; j >= 0; j--) {
                tmp = classes[i].price[j].price;
                if (tmp < lowest) lowest = tmp;
            }
        }
    }

    return lowest;
};
