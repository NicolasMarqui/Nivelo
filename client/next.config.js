const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

// const config = {
//     publicRuntimeConfig: {
//         localeSubpaths,
//     },
// };

module.exports = {
    i18n,
};
