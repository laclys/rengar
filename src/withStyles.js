/*
 * @Author: Lac
 * @Date: 2018-10-18 21:31:58
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-18 21:41:28
 */
import React, {
  Component
} from 'react'

// HOC with-styles
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount () {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    render () {
      return <DecoratedComponent {...this.props} />
    }
  }
}
