var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "New Webpack Project",
            template: "src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        })
    ]
};

module.exports = webpackConfig;
