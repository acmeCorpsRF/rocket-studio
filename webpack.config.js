const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /[\\/]node_modules[\\/]/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ],
    devtool: 'cheap-inline-module-source-map'

};