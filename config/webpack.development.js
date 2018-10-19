const { resolve } = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.scss', '.svg', 'jpg', 'png'],
    alias: {
      styles: resolve(__dirname, '../src/styles'),
      components: resolve(__dirname, '../src/components'),
      pages: resolve(__dirname, '../src/pages')
    }
  }
};
