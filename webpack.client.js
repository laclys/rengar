/*
 * @Author: Lac 
 * @Date: 2018-10-06 13:30:49 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 20:09:07
 */
const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(config, clientConfig)