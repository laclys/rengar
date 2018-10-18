/*
 * @Author: Lac
 * @Date: 2018-10-06 23:15:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-14 00:45:51
 */
/*
 * @Author: Lac
 * @Date: 2018-10-05 22:26:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-10 22:41:18
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getTranslationList } from './store/actions'

class Translation extends Component {
  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }

  render () {
    return this.props.login ? (
      <div>
        { this.getList() }
      </div>
    ) : <Redirect to='/' />
  }

  getList () {
    const { list } = this.props
    return list.map(item => <div key={item.id} >{ item.title }</div>)
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getTranslationList () {
    dispatch(getTranslationList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
