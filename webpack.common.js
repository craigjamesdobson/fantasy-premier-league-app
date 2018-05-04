const path = require("path");
//const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    Index: "./src/js/Index.ts",
    PlayerList: "./src/js/views/Players/PlayerList.ts",
    ScoreCalculations: "./src/js/views/Calculations/ScoreCalculations.ts"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
              publicPath: "img"
            }
          }
        ]
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new HtmlWebpackPlugin({
      Title: "Fantasy Premier League App",
      filename: "index.html",
      template: "views/index.html",
      excludeChunks: ["PlayerData", "PlayerList", "ScoreCalculations"]
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Players",
      chunks: ["Index", "PlayerData", "PlayerList"],
      filename: "players.html",
      template: "views/players.html"
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Calculator",
      chunks: ["Index", "PlayerData", "ScoreCalculations"],
      filename: "calculator.html",
      template: "views/calculator.html"
    }),
    new CleanWebpackPlugin(["docs"]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  externals: {
    jquery: "jQuery",
    Handlebars: "Handlebars"
  }
};
