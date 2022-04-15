import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from 'path';

const isDev = process.env.NODE_ENV === "development";

const common: Configuration = {
  mode: isDev ? "development" : "production",
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  externals: ["fsevents"],
  output: {
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  watch: isDev,
  devtool: isDev ? "inline-source-map" : undefined,
};

const main: Configuration = {
  ...common,
  target: "electron-main",
  entry: {
    main: path.resolve(__dirname,"src","main.ts"),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};

const preload: Configuration = {
  ...common,
  target: "electron-preload",
  entry: {
    preload: path.resolve(__dirname,"src","preload.ts"),
  },
};

const renderer: Configuration = {
  ...common,
  target: "electron-renderer",
  entry: {
    renderer: path.resolve(__dirname,"src","renderer","index.tsx"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"src","renderer","index.html"),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

const config = isDev ? renderer : [main, preload, renderer];
export default config;
