/* Build config: */
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    
    new FaviconsWebpackPlugin({
        logo: './src/static/logo--round.png',
        cache: true,
        publicPath: '',
    })
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});