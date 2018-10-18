/*
 * @Author: Lac
 * @Date: 2018-10-14 00:32:46
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:39:48
 */
import { CHANGE_LIST } from './constants'

const defaultState = {
  translationList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}
