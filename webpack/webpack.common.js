const path = require('path');

module.exports = {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, '../client/src/components/'),
        "@containers": path.resolve(__dirname, '../client/src/containers/'),
        "@store": path.resolve(__dirname, '../client/src/store/'),
        "@common": path.resolve(__dirname, '../client/src/common/')
      },
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
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
