export const shortTutorDescription = (str: String, maxLength: number) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    } else {
        return str;
    }
};
