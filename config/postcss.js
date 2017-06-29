const values = require('postcss-modules-values');

module.exports = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      values,
    ],
  },
};
