export const getLowestValueArray = (arr: any[]) => {
    if (!arr || arr.length === 0) return 0.0;

    let min = arr[0];

    arr.map((el, i) => {
        if (el.price < min.price) {
            min = el;
        }
    });

    return min.price;
};

export const getLowestValueArrayClasses = (arr: any[]) => {
    if (!arr || arr.length === 0) return 0.0;

    let min = arr[0].price[0];

    arr.map((el, i) => {
        el.price.map((p) => {
            if (Number(p.price) < Number(min.price)) {
                min = p.price;
            }
        });
    });

    return min;
};
