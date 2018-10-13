/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:41:44 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:56:47
 */
import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: '/',
  params: {
    secret: config.secret
  }
})

export default instance
