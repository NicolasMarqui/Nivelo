export const getLowestValueArray = (arr: any[]) => {
    if (!arr || arr.length === 0) return [];

    let min = arr[0];

    arr.map((el, i) => {
        if (el.price < min.price) {
            min = el;
        }
    });

    return min.price;
};
