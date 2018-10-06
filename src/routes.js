/*
 * @Author: Lac 
 * @Date: 2018-10-07 00:55:19 
 * @Last Modified by:   Lac 
 * @Last Modified time: 2018-10-07 00:55:19 
 */
import React from 'react'
import { Route } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'

export default (
  <div>
    <Route path='/' exact component={ Home } ></Route>
    <Route path='/login' exact component={ Login } ></Route>
  </div>
)