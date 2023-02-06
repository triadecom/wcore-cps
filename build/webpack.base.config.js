const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Страницы сайта, key - имя страницы, value - заголовок (title)
const pages = {
    "index": "Главная страница",
    "test": "Тестовая страница"
};

module.exports = {
  entry: Object.keys(pages).reduce((config, page) => {
    config[page] = `./src/js/${page}.js`;
    return config;
  }, {}),

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /(node_modules|learn)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },

      {
        test: /^(?!(icon--)).*\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./img/[name].[ext]'
          },
        ]
      },
      
      // Подключаем иконки из css, у иконок должен быть строгий префикс 'icon--'
      {
        test: /^(icon--)*\.(svg|png)$/,
        use: [
          {
            loader: 'file-loader?name=./icons/[name].[ext]'
          },
        ]
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.css',
      }),

    new CopyWebpackPlugin([
        {
          from: './src/img',
          to: 'img',
        },
    ])
  ].concat(
    Object.entries(pages).map(
      (entry) =>
        new HtmlWebpackPlugin({
          title: `${entry[1]}`,
          inject: true,
          template: `./src/${entry[0]}.html`,
          filename: `${entry[0]}.html`,
          chunks: [entry[0]],
        }),
    )
  ),

};