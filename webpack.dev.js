const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesConfig = require('./pages.json');

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
  entry: {
    ...arrPagesEntry
  },
  devServer: {
    port: 8080
  },
  plugins: [...arrHtmlWebpackPluginPages],
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
                resolve(__dirname, './src/styles'),
                resolve(__dirname, './node_modules')
              ]
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, './postcss.config.js')
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss', '.svg', 'jpg', 'png'],
    alias: {
      styles: resolve(__dirname, './src/styles'),
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages')
    }
  }
};
