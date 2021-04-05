import { ClassesProps, PriceProps } from "@types";

export const lowestPriceClasses = (prices: PriceProps[] | []) => {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;

    if (prices === null || !prices) return "0.00";

    for (let i = prices.length - 1; i >= 0; i--) {
        tmp = prices[i].price;
        if (tmp < lowest) lowest = tmp;
    }

    return lowest === Number.POSITIVE_INFINITY ? 0.0 : lowest;
};

export const lowestPriceAval = (classes: ClassesProps[] | []) => {
    let lowest = Number.POSITIVE_INFINITY;
    let lowestIndexI = 0;
    let lowestIndexJ = 0;
    let tmpIndexI;
    let tmpIndexJ;
    let tmp;

    if (classes === null || !classes) return "0.0";

    for (let i = classes.length - 1; i >= 0; i--) {
        if (classes[i].price && classes[i].price !== null) {
            for (let j = classes[i].price.length - 1; j >= 0; j--) {
                tmp = classes[i].price[j].price;
                tmpIndexI = i;
                tmpIndexJ = j;

                if (tmp < lowest) {
                    lowest = tmp;
                    lowestIndexI = tmpIndexI;
                    lowestIndexJ = tmpIndexJ;
                }
            }
        }
    }

    return lowest === Number.POSITIVE_INFINITY || null
        ? 0.0
        : classes[lowestIndexI].price[lowestIndexJ].price;
};
