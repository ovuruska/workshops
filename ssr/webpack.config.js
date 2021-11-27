const path = require('path');
const nodeExternals = require('webpack-node-externals');

// CommonJS
module.exports = {
    entry: './src/index.js',
    watch:true,
    target: 'node',
    mode:"development",

    externals: [nodeExternals()],

    output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
    },

    module: {
        rules: [
            {
            test: /\.js$/,
            use: 'babel-loader'
            }
        ]
    }
};