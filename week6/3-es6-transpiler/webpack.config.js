var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "New Webpack Project",
        template: "src/index.ejs"
    })]
};

module.exports = webpackConfig;
