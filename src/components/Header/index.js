/*
 * @Author: Lac 
 * @Date: 2018-10-13 21:43:00 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-13 21:59:04
 */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      {
        props.login ? <Fragment>
          <Link to='/login' >Translate</Link>
          <br />
          <Link to='/login' >Logout</Link>
        </Fragment> : <Link to='/login' >Login</Link>
      }
    </div>
  )
}

const mapState = (state) => ({
  login: state.header.login
})

export default connect(mapState, null)(Header)