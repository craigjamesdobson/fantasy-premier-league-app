var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: {
        Index: './src/js/Index.ts',
        Players: './src/js/views/Players/Players.ts',
        Calculations: './src/js/views/Calculations/Calculations.ts'
    },
    output: {
        path: __dirname + '/docs',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/img/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: false,
        port: 8080,
        open: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    devMode ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoader: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // {
            //   test: /\.(html)$/,
            //   use: {
            //     loader: 'html-loader'
            //   }
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/'
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: path.join(__dirname, 'src/js/components/Helpers'),
                    precompileOptions: {
                        knownHelpersOnly: false
                    }
                }
            }
        ]
    },
    plugins: [
        // This automatically adds aliases to the application scope for the specified packages
        // So packages which look for the 'jQuery' global alias still work within our app closure
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([{ from: 'src/data/FantasyTeams.Json', to: '/' }]),
        // Generates default index.html
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App',
            chunks: ['Index'],
            filename: 'index.html',
            template: 'views/index.html'
        }),
        // Generates players.html
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App - Players',
            chunks: ['Index', 'Players'],
            filename: 'players.html',
            template: 'views/players.html'
        }),
        // Generates calculator.html
        new HtmlWebpackPlugin({
            title: 'Fantasy Premier League App - Calculator',
            chunks: ['Index', 'Calculations'],
            filename: 'calculator.html',
            template: 'views/calculator.html'
        }),
        // Extract css into seperate files
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    },
    externals: {
        jquery: 'jQuery',
        Handlebars: 'Handlebars'
    }
};
//# sourceMappingURL=webpack.config.js.map