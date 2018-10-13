/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:42:57 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:56:58
 */
import axios from 'axios'
import config from '../config'

const createInstance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr/',
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: {
    secret: config.secret
  }
})

export default createInstance