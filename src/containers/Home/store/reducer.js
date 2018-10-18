/*
 * @Author: Lac
 * @Date: 2018-10-07 14:22:31
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 16:14:24
 */
import { CHANGE_LIST } from './constants'

const defaultState = {
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      }
    default:
      return state
  }
}
