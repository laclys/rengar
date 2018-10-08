/*
 * @Author: Lac 
 * @Date: 2018-10-06 23:20:30 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-08 22:50:34
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'

import routes from '../routes'
import getStore from '../store'

export const render = (req, res) => {
  // 拿到异步数据，并填充到store里
  const store = getStore() 
  
  // 根据路由的路径，往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path)

  // 让matchRoutes里所有的组件，对应的loadDate方法执行一次
  const promises = []
  
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={ store } >
        <StaticRouter location={ req.path } context={{}} >
          <div>
            { routes.map(route => {
              return <Route { ...route } />
            }) }
          </div>
        </StaticRouter>
      </Provider>)
      
    res.send( `
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

}