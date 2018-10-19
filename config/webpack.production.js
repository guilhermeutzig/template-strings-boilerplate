const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const buildPath = resolve(__dirname, '../dist');

module.exports = {
  devtool: 'source-map',
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_[hash].css',
      chunkFilename: '[name]_[id].css'
    }),
    new CleanWebpackPlugin(buildPath)
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
      styles: resolve(__dirname, '../src/styles'),
      components: resolve(__dirname, '../src/components'),
      pages: resolve(__dirname, '../src/pages')
    }
  }
};
