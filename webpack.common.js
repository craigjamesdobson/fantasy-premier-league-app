const path = require('path');
//const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        Index: './src/js/Shared/Index.ts',
        PlayerList: './src/js/Players/PlayerList.ts',
        ScoreCalculations: './src/js/Calculations/ScoreCalculations.ts'
    },
    devtool: 'source-map',
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
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                            publicPath: 'img'
                        }
                    }


                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            Title: 'Fantasy Premier League App',
            filename: 'index.html',
            template: 'src/index.html',
            excludeChunks: ['PlayerData', 'PlayerList', 'ScoreCalculations']
        }),
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App - Players',
            chunks: ['Index', 'PlayerData', 'PlayerList'],
            filename: 'players.html',
            template: 'src/players.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App - Calculator',
            chunks: ['Index', 'PlayerData', 'ScoreCalculations'],
            filename: 'calculator.html',
            template: 'src/calculator.html',
        }),
        new CleanWebpackPlugin(['docs']),
        new ExtractTextPlugin("styles.css, playerList.css")
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    }
};