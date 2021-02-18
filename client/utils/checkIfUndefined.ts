export const checkIfUndefined = (value: any) => {
    return !value && value === undefined && value === null ? "-" : value;
};
