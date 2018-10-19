/*
 * @Author: Lac
 * @Date: 2018-10-05 22:26:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-20 01:08:55
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

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
      <Fragment>
        <Helmet>
          <title>SRR-Home</title>
          <meta name='description' content='this is a home Component' />
        </Helmet>
        <div className={styles.container} >
          { this.getList() }
        </div>
      </Fragment>
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
