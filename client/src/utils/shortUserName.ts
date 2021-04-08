export const shortUserName = (str: string): string => {
    if (str.length > 14) {
        return str.substring(0, 14) + "...";
    } else {
        return str;
    }
};
