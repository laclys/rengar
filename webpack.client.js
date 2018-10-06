/*
 * @Author: Lac 
 * @Date: 2018-10-06 13:30:49 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 13:34:41
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0',['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}