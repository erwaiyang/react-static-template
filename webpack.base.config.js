const path = require('path');
const webpack = require('webpack');
const postcss = require('./config/postcss');

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
      postcss,
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
