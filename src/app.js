/*
 * @Author: Lac 
 * @Date: 2018-10-10 22:18:12 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-10 22:44:01
 */
import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'

const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
}

export default App