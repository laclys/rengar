/*
 * @Author: Lac 
 * @Date: 2018-10-06 23:20:30 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 23:22:19
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Routes from '../routes'

export const render = (req) => {
  const content = renderToString(
    <StaticRouter location={ req.path } context={{}} >
      { Routes }
    </StaticRouter>)
  
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root' >${ content }</div>
        <script src='/index.js' ></script>
      </body>
    </html>
  `
}