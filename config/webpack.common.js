const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesConfig = require('../pages.json');

let arrHtmlWebpackPluginPages = [];
let arrPagesEntry = {};

if (pagesConfig) {
  Object.keys(pagesConfig).map(item => {
    arrHtmlWebpackPluginPages.push(new HtmlWebpackPlugin(pagesConfig[item]));
  });

  Object.keys(pagesConfig).map(item => {
    arrPagesEntry[pagesConfig[item].name] = pagesConfig[item].entry;
  });
}

module.exports = {
  devServer: {
    port: 8080,
    publicPath: '/',
    stats: 'errors-only',
    open: false
  },
  entry: {
    ...arrPagesEntry
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap'
          },
          {
            loader: 'sass-loader?sourceMap',
            options: {
              includePaths: [
                resolve(__dirname, '../src/styles'),
                resolve(__dirname, '../node_modules')
              ]
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|mp4|mov|svg|webm|pdf|zip)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              useRelativePath: false,
              outputPath: 'assets',
              context: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets',
              context: 'assets'
            }
          }
        ]
      }
    ]
  },
  plugins: [...arrHtmlWebpackPluginPages]
};
