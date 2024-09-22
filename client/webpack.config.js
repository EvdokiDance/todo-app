const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');


const PUBLIC_DIR = path.resolve(__dirname, ".", "public");
const BUILD_DIR = path.resolve(__dirname, ".", "build");

module.exports = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, "./src/app", "index.tsx"),
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR,
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.html$/, use: ['html-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, "index.html"),
      filename: "index.html",
    }),
    new ProgressPlugin(),
    new ReactRefreshWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
}