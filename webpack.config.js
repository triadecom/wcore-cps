const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
  "index",
  "test"
];

module.exports = {
  /*
  // Входной файл
  entry: {
    main: "./src/js/index.js",
    test: './src/js/test.js',
  },

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },
  */

  entry: pages.reduce((config, page) => {
    config[page] = `./src/js/${page}.js`;
    return config;
  }, {}),

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    port: 5500,
    proxy: {
      '/websocket': {
         target: 'ws://[address]:[port]',
         ws: true // important
      },
    }
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  /*
  // - Пользовательский порт для dev сервера
  devServer: {
    hot: true,
    port: 8008
  },
  */

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
  },
  plugins: [
    /*
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    new HtmlWebpackPlugin({
      template: './src/test.html',
      filename: 'test.html',
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    */

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img',
      },
    ])
  ].concat(
    pages.map(
      (page) => {
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
      }
    )
  ),
};
