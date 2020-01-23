const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const clientConfiguration = (isDevMode) => {
  return {
    devtool: isDevMode ? "eval-source-map" : "none",
    entry: "./client/src/index.tsx",
    output: {
      filename: "client.js",
      path: path.resolve(__dirname, "../dist"),
      library: "client"
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Chat Application",
        id: "root",
        template: "./client/template/index.html"
      })
    ],
  }
};
module.exports = function (env, argv) {
  const isDevMode = argv.mode !== "production";
  return merge([
    common,
    clientConfiguration(isDevMode),
  ]);
};
