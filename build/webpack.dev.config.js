/* Development config: */
const webpack = require('webpack');

const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 5500,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});
