const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const buildPath = resolve(__dirname, 'dist');
const webpack = require('webpack');

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
  devtool: 'source-map',
  entry: {
    ...arrPagesEntry
  },
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
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
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_[hash].css',
      chunkFilename: '[name]_[id].css'
    }),
    new CleanWebpackPlugin(buildPath),
    ...arrHtmlWebpackPluginPages
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
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
