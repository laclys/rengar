/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-08 22:49:40
 */
import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public')) // 只要请求静态文件就在public这个文件夹中找

app.get('*', function(req, res) {
  render(req, res)
})

var server = app.listen(3000)