/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 13:40:49
 */
import React from 'react'
import { renderToString } from 'react-dom/server'

import express from 'express'
import Home from './containers/Home'

const app = express()

app.use(express.static('public')) // 只要请求静态文件就在public这个文件夹中找

const content = renderToString(<Home />)

app.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root' >${ content }</div>
        <script src='/index.js' ></script>
      </body>
    </html>
  `)
})

var server = app.listen(3000)