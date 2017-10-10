var path = require('path');

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
};

module.exports = webpackConfig;
