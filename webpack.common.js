const path = require('path');
//const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        players: './src/js/players.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            Title: 'Fantasy Premier League App',
            filename: 'index.html',
            template: 'src/index.html',
            excludeChunks: ['players']
        }),
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App - Players',
            chunks: ['index', 'players'],
            filename: 'players.html',
            template: 'src/players.html',
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    }
};