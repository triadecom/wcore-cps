/* Production config: 
TODO: 
Add minifiers and vendors
*/
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');

const productionWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "prod"),
  },
  plugins: [
    new CleanWebpackPlugin({
        dry: false,
    }),
    
    new FaviconsWebpackPlugin({
        logo: './src/static/logo--round.png',
        cache: true,
        publicPath: '',
    })
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(productionWebpackConfig)
});