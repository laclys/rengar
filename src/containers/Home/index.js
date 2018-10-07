/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:38 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-07 16:15:36
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHomeList } from './store/actions'
import Header from '../../components/Header'

class Home extends Component {

  componentDidMount() {
    this.props.getHomeList()
  }

  render() {
    return (
      <div>
        <Header />
        { this.getList() }
        <button onClick={()=>{alert('click')}}>click</button>
      </div>
    )
  }

  getList() {
    const { list } = this.props
    return list.map(item => <div key={ item.id } >{ item.title }</div>)
  }
}


const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)