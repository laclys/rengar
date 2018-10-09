/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:42:57 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-09 23:44:53
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://47.95.113.63/ssr/'
})

export default instance