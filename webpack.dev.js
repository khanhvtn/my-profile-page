const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
});
