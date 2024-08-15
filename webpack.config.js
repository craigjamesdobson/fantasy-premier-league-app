const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    Index: "./src/js/Index.ts",
    Players: "./src/js/views/Players/Players.ts",
    Teams: "./src/js/views/Teams/Teams.ts",
    Calculations: "./src/js/views/Calculations/Calculations.ts",
    Table: "./src/js/views/Table/Table.ts",
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'src/img'),
    compress: false,
    port: 8080,
    open: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true, // Suppress warnings
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]',
        },
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            helperDirs: path.join(__dirname, 'src/js/components/Helpers'),
            precompileOptions: {
              knownHelpersOnly: false,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App",
      chunks: ["Index"],
      filename: "index.html",
      template: "views/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Players",
      chunks: ["Index", "Players"],
      filename: "players.html",
      template: "views/players.html",
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Teams",
      chunks: ["Index", "Teams"],
      filename: "teams.html",
      template: "views/teams.html",
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Calculator",
      chunks: ["Index", "Calculations"],
      filename: "calculator.html",
      template: "views/calculator.html",
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Table",
      chunks: ["Index", "Calculations", "Table"],
      filename: "table.html",
      template: "views/table.html",
    }),
    new HtmlWebpackPlugin({
      title: "Fantasy Premier League App - Rules",
      chunks: ["Index"],
      filename: "rules.html",
      template: "views/rules.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/data/', to: '' },
        { from: 'src/misc/', to: '' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
