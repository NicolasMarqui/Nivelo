import { ClassesProps, PriceProps } from "@types";

export const lowestPriceClasses = (prices: PriceProps[] | []): number => {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;

    for (let i = prices.length - 1; i >= 0; i--) {
        tmp = prices[i].price;
        if (tmp < lowest) lowest = tmp;
    }

    return lowest;
};

export const lowestPriceAval = (classes: ClassesProps[] | []): number => {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;

    for (let i = classes.length - 1; i >= 0; i--) {
        for (let j = classes[i].price.length - 1; j >= 0; j--) {
            tmp = classes[i].price[j].price;
            if (tmp < lowest) lowest = tmp;
        }
    }

    return lowest;
};
