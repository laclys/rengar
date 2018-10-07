/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:13:34 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 22:13:58
 */
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '../routes'
import getStore from '../store'

const App = () => {
  return (
    <Provider store={ getStore() } >
      <BrowserRouter>
        <div>
          { routes.map(route => {
              return <Route { ...route } />
            }) }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))