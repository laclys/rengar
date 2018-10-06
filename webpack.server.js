/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:33 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 20:09:58
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)