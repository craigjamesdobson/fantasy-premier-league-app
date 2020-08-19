const path = require("path");
const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const terserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    Index: "./src/js/Index.ts",
    Players: "./src/js/views/Players/Players.ts",
    Teams: "./src/js/views/Teams/Teams.ts",
    Calculations: "./src/js/views/Calculations/Calculations.ts",
    Table: "./src/js/views/Table/Table.ts",
  },
  output: {
    path: __dirname + "/docs",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src/img"),
    compress: false,
    port: 8080,
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoader: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/",
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          helperDirs: path.join(__dirname, "src/js/components/Helpers"),
          precompileOptions: {
            knownHelpersOnly: false,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([__dirname + "/docs"]),
    // This automatically adds aliases to the application scope for the specified packages
    // So packages which look for the 'jQuery' global alias still work within our app closure
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),

    new CopyWebpackPlugin([{ from: "src/data/", to: "" }]),
    new CopyWebpackPlugin([{ from: "src/misc/", to: "" }]),

    // Generates default index.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App",
      chunks: ["Index"],
      filename: "index.html",
      template: "views/index.html",
    }),

    // Generates players.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Players",
      chunks: ["Index", "Players"],
      filename: "players.html",
      template: "views/players.html",
    }),

    // Generates teams.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Teams",
      chunks: ["Index", "Teams"],
      filename: "teams.html",
      template: "views/teams.html",
    }),

    // Generates calculator.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Calculator",
      chunks: ["Index", "Calculations"],
      filename: "calculator.html",
      template: "views/calculator.html",
    }),

    // Generates table.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Table",
      chunks: ["Index", "Calculations", "Table"],
      filename: "table.html",
      template: "views/table.html",
    }),

    // Generates table.html
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Rules",
      chunks: ["Index"],
      filename: "rules.html",
      template: "views/rules.html",
    }),
    // Extract css into seperate files
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),

    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: { chunks: "all" },
    minimizer: [
      new terserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  externals: {
    jquery: "jQuery",
    Handlebars: "Handlebars",
  },
};
