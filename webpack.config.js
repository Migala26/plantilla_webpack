var path = require('path');
var dir_js = path.resolve(__dirname, 'js')
module.exports = {
    entry: path.resolve(dir_js,'main.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: dir_js,
              loader: 'babel-loader' }
        ]
    }
}