/*
 * @Author: Lac 
 * @Date: 2018-10-06 23:31:52 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 23:39:49
 */
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/login' >Login</Link>
    </div>
  )
}

export default Header