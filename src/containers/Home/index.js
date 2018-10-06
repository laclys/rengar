/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:38 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 00:36:32
 */
import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'

const Home = (props) => {
  return (
    <div>
      <Header />
      <div>I am { props.name }</div>
			<button onClick={()=>{alert('click')}}>click</button>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home)