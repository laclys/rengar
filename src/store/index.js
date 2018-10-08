/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:51:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-08 23:39:37
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
