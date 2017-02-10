var path = require('path');

const webpack = require('webpack');

module.exports = {
  entry:  path.resolve(__dirname, './MicaquoteHelper.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'micaquote.helper.js',
    libraryTarget: 'umd',
    library: 'MicaquoteHelper',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};