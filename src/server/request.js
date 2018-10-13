/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:42:57 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 23:44:57
 */
import axios from 'axios'

const createInstance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr/',
  headers: {
    cookie: req.get('cookie') || ''
  }
})

export default createInstance