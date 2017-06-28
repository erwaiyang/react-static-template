/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack');
const R = require('ramda');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config');

const config = R.merge(baseConfig, {
  entry: {
    app: [
      './src/build.js',
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
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
  ],
  target: 'node',
  externals: nodeExternals(),
});

module.exports = config;
