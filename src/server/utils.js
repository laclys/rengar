/*
 * @Author: Lac 
 * @Date: 2018-10-06 23:20:30 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 00:57:31
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../routes'
import getStore from '../store'

export const render = (req) => {

  const content = renderToString(
    <Provider store={ getStore() } >
      <StaticRouter location={ req.path } context={{}} >
        { Routes }
      </StaticRouter>
    </Provider>)
    
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