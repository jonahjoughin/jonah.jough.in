var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var fs = require('fs');
var nodeModules = {};

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var clientConfig = {
  entry: SRC_DIR + '/client.js',
  output: {
    path: DIST_DIR + '/static/js',
    filename: 'client.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: SRC_DIR+"/static", to: DIST_DIR+"/static"}
    ])
  ]
}
var serverConfig = {
  target: 'node',
  node: {
       __dirname: false,
  },
  entry: SRC_DIR + '/server.js',
  output: {
    path: DIST_DIR,
    filename: 'server.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  externals: nodeModules
}

module.exports = [clientConfig,serverConfig]
