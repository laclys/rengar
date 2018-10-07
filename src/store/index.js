/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:51:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 14:58:43
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore