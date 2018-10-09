/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-09 23:19:43
 */
import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './utils'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../routes'

const app = express()
app.use(express.static('public')) // 只要请求静态文件就在public这个文件夹中找

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function(req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', function(req, res) {
  const store = getStore() 
  // 根据路由的路径，往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
})

var server = app.listen(3000)