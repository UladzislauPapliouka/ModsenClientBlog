const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
  }),
  new Dotenv(),
];
const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production'
module.exports = {
  entry: './src/index.tsx',
  output:{
    path:path.resolve(__dirname,'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: isProduction ? 'bundle.min.js' : 'bundle.js',
    clean: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: this.mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.tsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.ts', '.tsx','.js','.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@typing': path.resolve(__dirname, 'src/types'),
    },
  },
}