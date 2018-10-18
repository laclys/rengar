/*
 * @Author: Lac
 * @Date: 2018-10-07 15:08:40
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:54:17
 */
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  // 浏览器运行 /api/news.json = http://loacalhost:300/api/news.json
  // 服务器运行  /api/news.json = 服务器目录下的/api/news.json
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      }).catch(err => {
        const list = []
        dispatch(changeList(list))
      })
  }
}
