/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config');

const config = {
  output: baseConfig.output,
  module: baseConfig.module,
  entry: {
    vendor: baseConfig.entry.vendor,
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
  ].concat(baseConfig.plugins),
  target: 'node',
  externals: nodeExternals(),
};

module.exports = config;
