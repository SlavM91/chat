// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./server/src/index.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "server"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()]
};
