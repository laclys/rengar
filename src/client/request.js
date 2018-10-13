/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:41:44 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:53:16
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  params: {
    secret: 'M5s2sPneDE'
  }
})

export default instance
