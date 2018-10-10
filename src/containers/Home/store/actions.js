/*
 * @Author: Lac 
 * @Date: 2018-10-07 15:08:40 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-10 21:57:58
 */
import axios from 'axios'

import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  // 浏览器运行 /api/news.json = http://loacalhost:300/api/news.json
  // 服务器运行  /api/news.json = 服务器目录下的/api/news.json
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=D37msjPeC3')
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}