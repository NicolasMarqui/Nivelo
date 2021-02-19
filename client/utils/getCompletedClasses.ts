export const getCompletedClasses = (arr: any[]): number => {
    if (!arr || arr.length === 0 || arr === []) return 0;

    let sum: number = 0;
    arr.map((el) => {
        sum += el.amountTimeTaught;
    });

    console.log(sum);

    return sum;
};
