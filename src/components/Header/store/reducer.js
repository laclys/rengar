/*
 * @Author: Lac
 * @Date: 2018-10-13 21:44:47
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 22:55:53
 */
import { CHANGE_LOGIN } from './constants'

const defaultState = {
  login: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }

    default:
      return state
  }
}
