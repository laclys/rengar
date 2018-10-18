/*
 * @Author: Lac
 * @Date: 2018-10-14 00:26:34
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:54:22
 */
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then(res => {
        if (res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        } else {
          const list = []
          dispatch(changeList(list))
        }
      })
  }
}
