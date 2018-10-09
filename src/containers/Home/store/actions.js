/*
 * @Author: Lac 
 * @Date: 2018-10-07 15:08:40 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-09 23:47:37
 */
import axios from 'axios'

import { CHANGE_LIST } from './constants'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  // 浏览器运行 /api/news.json = http://loacalhost:300/api/news.json
  // 服务器运行  /api/news.json = 服务器目录下的/api/news.json
  let request = server ? serverAxios : clientAxios
  return (dispatch) => {
    return request.get('/api/news.json?secret=D37msjPeC3')
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}