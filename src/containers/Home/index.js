/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:38 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-08 23:34:22
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

Home.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
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