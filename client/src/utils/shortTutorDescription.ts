export const shortTutorDescription = (
    str: string,
    maxLength: number
): string => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    } else {
        return str;
    }
};
