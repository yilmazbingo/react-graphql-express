const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  name: "web",
  output: {
    publicPath: "/",
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.s?css$/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    devtool: "cheap-module-eval-source-map",

    overlay: true,
    // contentBase: path.resolve(__dirname, "client"),

    // we do not this becasue server is handling history too
    // historyApiFallback: true,
  },
  plugins: [
    new FaviconsWebpackPlugin("./public/favicon.ico"),

    new webpack.EvalSourceMapDevToolPlugin(),
    new HtmlWebpackPlugin({
      template: "client/index.html",
    }),
  ],
};
