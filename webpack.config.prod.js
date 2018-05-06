const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

// Build Dirname
const YEAR = '2018';

const buildPath = path.resolve(__dirname, `docs/${YEAR}`);
const extractPlugin = new ExtractTextPlugin({
  filename: './assets/css/app.css',
});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    // with context setup, ./src/app.js -> ./app.js
    app: './app.js',
    vendors: './vendors.js',
    polyfill: 'babel-polyfill',
  },
  output: {
    path: buildPath,
    filename: './assets/js/[name].bundle.js',
  },
  module: {
    rules: [
      // babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      // html-loader
      { test: /\.html$/, use: ['html-loader'] },
      // sass-loader
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
      // Media Files Loader
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // clear old build folder before building
    new CleanWebpackPlugin([`docs/${YEAR}`]),
    // auto update index.html in dist folder
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      hash: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
    }),
    extractPlugin, // Extract CSS Files From JS Bundle
    new CssoWebpackPlugin(), // Minify CSS
  ],
};
