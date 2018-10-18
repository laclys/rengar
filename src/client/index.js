/*
 * @Author: Lac
 * @Date: 2018-10-07 00:13:34
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-10 22:44:46
 */
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from '../routes'
import { getClientStore } from '../store'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          { renderRoutes(routes) }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
