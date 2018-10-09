/*
 * @Author: Lac 
 * @Date: 2018-10-09 23:41:44 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-09 23:44:38
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: '/'
})

export default instance
