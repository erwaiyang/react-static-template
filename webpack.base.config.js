const path = require('path');
const webpack = require('webpack');

const vendor = [
  'react',
  'react-dom',
  'prop-types',
  'styled-components',
];

const output = {
  filename: '[name]-bundle.js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
};

const rules = [
  {
    test: /\.jsx?$/,
    use: [
      'babel-loader',
    ],
    exclude: /node_modules/,
  },
];

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-bundle.js',
    minChunks: Infinity,
  }),
];

module.exports = {
  entry: {
    vendor,
  },
  output,
  module: {
    rules,
  },
  plugins,
};
