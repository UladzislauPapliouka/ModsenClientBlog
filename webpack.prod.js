const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
  }),
  new CompressionPlugin({
    test: /\.js(\?.*)?$/i,
  })
];

module.exports = merge( {
  mode: 'production',
  plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
},common);
