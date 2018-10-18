/*
 * @Author: Lac
 * @Date: 2018-10-05 22:26:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-18 21:22:25
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHomeList } from './store/actions'
import styles from './style.css'
class Home extends Component {
  componentWillMount () {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }

  render () {
    return (
      <div className={styles.test} >
        { this.getList() }
        <button onClick={() => { alert('click') }}>click</button>
      </div>
    )
  }

  getList () {
    const { list } = this.props
    return list.map(item => <div key={item.id} >{ item.title }</div>)
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

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home)

ExportHome.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}

export default ExportHome
