/*
 * @Author: Lac 
 * @Date: 2018-10-15 21:04:27 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-16 22:47:34
 */
import React, { Component } from 'react'

class NotFound extends Component {

  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (this.props.staticContext.NOT_FOUND = true)
  }

  render() {
    return <div>
    404 ~
    </div>
  }
}

export default NotFound