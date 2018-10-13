/*
 * @Author: Lac 
 * @Date: 2018-10-13 22:24:45 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 23:17:31
 */
import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value: value
})

 export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=M5s2sPneDE')
      .then(res => {
        const { login } = res.data.data
        dispatch(changeLogin(login))
      })
  }
}

 export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?secret=M5s2sPneDE')
      .then(res => {
        const { login } = res.data.data
        dispatch(changeLogin(login))
      })
  }
}

 export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json?secret=M5s2sPneDE')
      .then(res => {
        const { login } = res.data.data
        dispatch(changeLogin(login))
      })
  }
}