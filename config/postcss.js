const values = require('postcss-modules-values');
const autoprefixer = require('autoprefixer');

module.exports = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      values,
      autoprefixer,
    ],
  },
};
