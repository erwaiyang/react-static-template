/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack');
const R = require('ramda');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

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
          use: 'css-loader?modules&localIdentName=[local]---[hash:base64:5]',
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
    whitelist: ['normalize.css', 'flexboxgrid'],
  }),
});

module.exports = config;
