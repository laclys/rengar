/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:13:34 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-08 23:38:15
 */
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '../routes'
import { getClientStore } from '../store'

const store = getClientStore() 

const App = () => {
  return (
    <Provider store={ store } >
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