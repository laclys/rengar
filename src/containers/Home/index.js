/*
 * @Author: Lac
 * @Date: 2018-10-05 22:26:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-18 22:11:38
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyles from '../../withStyles'

class Home extends Component {
  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }

  render () {
    return (
      <div className={styles.container} >
        { this.getList() }
      </div>
    )
  }

  getList () {
    const { list } = this.props
    return list.map(item => <div key={item.id} className={styles.item} >{ item.title }</div>)
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getList () {
    dispatch(getHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyles(Home, styles))

ExportHome.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}

export default ExportHome
