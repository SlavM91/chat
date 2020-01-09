const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: "./server/src/index.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "server"
  },
  target: "node",
  externals: [nodeExternals()]
});
