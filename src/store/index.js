/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:51:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 00:56:53
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'Lac'}, action) => {
  return state
}

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore