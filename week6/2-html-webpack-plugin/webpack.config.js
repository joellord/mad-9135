var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "New Webpack Project",
        template: "src/index.ejs"
    })]
};

module.exports = webpackConfig;
