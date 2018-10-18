/*
 * @Author: Lac
 * @Date: 2018-10-06 23:15:38
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-18 22:02:37
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
import styles from './style.css'
import withStyles from '../../withStyles'

class Translation extends Component {
  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }

  render () {
    return this.props.login ? (
      <div className={ styles.test } >
        { this.getList() }
      </div>
    ) : <Redirect to='/' />
  }

  getList () {
    const { list } = this.props
    return list.map(item => <div key={item.id} >{ item.title }</div>)
  }
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

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyles(Translation, styles))

ExportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

export default ExportTranslation
