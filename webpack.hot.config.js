const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const PORT = 4000;

module.exports = {
  entry: {
    vendor: baseConfig.entry.vendor,
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
      './src/hot.js',
    ],
  },
  output: baseConfig.output,
  devtool: 'cheap-module-source-map',
  module: baseConfig.module,
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    historyApiFallback: true,
    hot: true,
    contentBase: './',
  },
};
