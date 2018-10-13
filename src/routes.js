/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:55:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:24:08
 */
import React from 'react'
import {
  Route
} from 'react-router-dom'

import App from './app'
import Home from './containers/Home'
import Translation from './containers/Translation'

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  key: 'app',
  routes: [{
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/translation',
      component: Translation,
      exact: true,
      loadData: Translation.loadData,
      key: 'translation'
    }
  ]
}]