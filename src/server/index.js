/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-16 22:51:25
 */
import express from 'express'
import proxy from 'express-http-proxy'
import {
  render
} from './utils'
import {
  getStore
} from '../store'
import {
  matchRoutes
} from 'react-router-config'
import routes from '../routes'

const app = express()
app.use(express.static('public')) // 只要请求静态文件就在public这个文件夹中找

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', function (req, res) {
  const store = getStore(req)
  // 根据路由的路径，往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise) // 不管数据加载成功还是失败，把能准备的数据都准备好。更好的容错不必担心那个接口请求失败。都会执行promise.all
    }
  })
  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const html = render(store, routes, req, context)

    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

var server = app.listen(3000)