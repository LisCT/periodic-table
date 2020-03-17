const path = require("path");

module.exports = {
  entry: ["./src/Index.tsx"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  resolve: {
    extensions: [".jsx", ".json", ".js", ".ts", ".tsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env", "stage-2"]
          }
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg)?$/,
        use:
          "file-loader?limit=10000&mimetype=application/name=&name=/images/[name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
          "url-loader?limit=10000&mimetype=application/font-woff&name=&name=/css/webfonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use:
          "file-loader?limit=10000&mimetype=application/font-woff&name=&name=/css/webfonts/[name].[ext]"
      }
    ]
  }
};
