const path = require('path');
const webpack = require('webpack');
const values = require('postcss-modules-values');

const vendor = [
  'react',
  'react-dom',
  'prop-types',
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
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader?modules&localIdentName=[local]---[hash:base64:5]',
      'postcss-loader',
    ],
  },
];

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-bundle.js',
    minChunks: Infinity,
  }),
];

const postcss = [
  values,
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
  postcss,
};
