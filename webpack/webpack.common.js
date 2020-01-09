module.exports = {
    resolve: {
      alias: {
        "@components": "./client/src/components/",
        "@containers": "./client/src/containers/",
        "@common": "./client/src/common/"
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
