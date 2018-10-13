/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:51:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:35:17
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as translationReducer } from '../containers/Translation/store'
import { reducer as headerReducer } from '../components/Header/store'

import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

export const getStore = (req) => {
  // 改变服务器端的store，需要用serverAxios
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
