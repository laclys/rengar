/*
 * @Author: Lac 
 * @Date: 2018-10-07 15:08:40 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 16:01:27
 */
import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3')
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}