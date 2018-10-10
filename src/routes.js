/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:55:19 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-10 22:38:49
 */
import React from 'react'
import {
  Route
} from 'react-router-dom'

import App from './app'
import Home from './containers/Home'
import Login from './containers/Login'

// export default [
//   {
//     path: '/',
//     component: Home,
//     exact: true,
//     loadData: Home.loadData,
//     key: 'home'
//   },
//   {
//     path: '/login',
//     component: Login,
//     exact: true,
//     key: 'login'
//   }
// ]

export default [{
  path: '/',
  component: App,
  key: 'app',
  routes: [{
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    }
  ]
}]