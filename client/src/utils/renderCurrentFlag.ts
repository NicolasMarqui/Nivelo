export const renderCurrentFlat = (router: any) => {
    switch (router.locale) {
        case "pt":
            return "br";
        case "en":
            return "us";
        case "es":
            return "es";
        default:
            return "br";
    }
};
