/*
 * @Author: Lac 
 * @Date: 2018-10-13 21:43:00 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-16 22:51:45
 */
import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { actions } from './store'
import styles from './style.css'

class Header extends Component {

  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={ styles.test } >
      <Link to='/'>Home</Link>
      <br />
      {
        login ? <Fragment>
          <Link to='/translation' >Translate</Link>
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