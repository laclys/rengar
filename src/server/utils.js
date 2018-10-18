/*
 * @Author: Lac
 * @Date: 2018-10-06 23:20:30
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-16 22:52:43
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.path} context={context} >
        <div>
          { renderRoutes(routes) }
        </div>
      </StaticRouter>
    </Provider>)

  const cssStr = context.css.length ? context.css.join('\n') : ''
  return `
      <html>
        <head>
          <title>ssr</title>
          <style>${cssStr}</style>
        </head>
        <body>
          <div id='root' >${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src='/index.js' ></script>
        </body>
      </html>
    `
}
