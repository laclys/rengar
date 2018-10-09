/*
 * @Author: Lac 
 * @Date: 2018-10-07 15:08:40 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-09 23:16:41
 */
import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  // 浏览器运行 /api/news.json = http://loacalhost:300/api/news.json
  // 服务器运行  /api/news.json = 服务器目录下的/api/news.json
  let url = ''
  if (server) {
    url = 'http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3'
  } else {
    url = '/api/news.json?secret=D37msjPeC3'
  }

  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}