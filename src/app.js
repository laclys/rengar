/*
 * @Author: Lac 
 * @Date: 2018-10-10 22:18:12 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 23:39:17
 */
import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { actions } from './components/Header/store'
const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo())
}

export default App