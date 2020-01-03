// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "production",
  entry: `./client/src/index.tsx`,
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "../dist"),
    library: "client"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chat Application",
      id: "root",
      template: `./client/template/index.html`
    })
  ],
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
  }
};