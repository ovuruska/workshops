const path = require('path');
const nodeExternals = require('webpack-node-externals');

// CommonJS
module.exports = {
    entry: './src/index.js',
    watch:false,
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
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] }
            }
        ]
    }
};