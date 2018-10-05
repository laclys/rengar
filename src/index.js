/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-05 22:28:25
 */
import React from 'react'
import { renderToString } from 'react-dom/server'

import express from 'express'
import Home from './containers/Home'

const app = express()
const content = renderToString(<Home />)

app.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        ${ content }
      </body>
    </html>
  `)
})

var server = app.listen(3000)