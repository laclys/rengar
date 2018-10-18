/*
 * @Author: Lac
 * @Date: 2018-10-05 22:26:33
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-16 22:02:13
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoader: 1,
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      }]
    }]
  }
}

module.exports = merge(config, serverConfig)
