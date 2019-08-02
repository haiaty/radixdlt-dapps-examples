const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: path.join(process.cwd(), 'src'), // static file location
    host: 'localhost',
    historyApiFallback: true, // true for inldex.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    watchContentBase: true,
    hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
  }
});