const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    Index: './src/js/Index.ts',
    PlayerList: './src/js/views/Players/PlayerList.ts',
    ScoreCalculations: './src/js/views/Calculations/ScoreCalculations.ts'
  },
  output: {
    path: __dirname + '/docs',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
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
              outputPath: 'img',
              publicPath: 'img'
            }
          }
        ]
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  plugins: [
    // This automatically adds aliases to the application scope for the specified packages
    // So packages which look for the 'jQuery' global alias still work within our app closure
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // Clean dist folder
    new CleanWebpackPlugin(['docs']),

    // Copy our external dependencies into the output folder so we can put them into MVC bundle(s)
    new CopyWebpackPlugin([{ from: 'src/js/components/Templates', to: 'templates' }]),

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
      chunks: ['Index', 'PlayerList'],
      filename: 'players.html',
      template: 'views/players.html'
    }),

    // Generates calculator.html
    new HtmlWebpackPlugin({
      title: 'Fantasy Premier League App - Calculator',
      chunks: ['Index', 'PlayerList', 'ScoreCalculations'],
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
