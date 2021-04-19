const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "pt",
        locales: ["pt", "en"],
    },
    localePath: path.resolve("./public/locales"),
};
