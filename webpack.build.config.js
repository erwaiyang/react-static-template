/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack');
const R = require('ramda');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const css = require('./config/css');
const postcss = require('./config/postcss');
const externalCss = require('./config/externalCss');

const config = R.merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            css,
            postcss,
          ],
        }),
      },
    ],
  },
  entry: {
    app: [
      './src/static.js',
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        unused: true,
        dead_code: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles.css'),
  ],
  target: 'node',
  externals: nodeExternals({
    whitelist: externalCss,
  }),
});

module.exports = config;
