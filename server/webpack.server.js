const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
//do not bundle any libaries into our output server bundle if the libarary exists in the node_modules folder
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);