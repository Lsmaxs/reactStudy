"use strict";
const path = require("path");

module.exports = {
    build: {
        env: require("./prod,env"),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory:"/",
        assetsPublicPath:"/",
        productionSourceMap: false,
    },
    dev: {
        env: require('./dev.env'),
        port:process.env.PORT || 8011,
        assetsSubDirectory:"/",
        assetsPublicPath:"/",
        autoOpenBrowser: true,
        proxyTable: {},
    }
};