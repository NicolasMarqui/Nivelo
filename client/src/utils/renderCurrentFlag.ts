export const renderCurrentFlat = (router: any) => {
    switch (router.locale) {
        case "pt":
            return "pt";
        case "en":
            return "en";
        case "es":
            return "es";
        default:
            return "pt";
    }
};
