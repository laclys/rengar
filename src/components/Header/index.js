/*
 * @Author: Lac 
 * @Date: 2018-10-13 21:43:00 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 23:17:13
 */
import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { actions } from './store'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div>
      <Link to='/'>Home</Link>
      <br />
      {
        login ? <Fragment>
          <Link to='/login' >Translate</Link>
          <br />
          <div onClick={ handleLogout } >Logout</div>
        </Fragment> : <div onClick={ handleLogin } >Login</div>
      }
    </div> 
    )
  }
}

const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapState, mapDispatch)(Header)