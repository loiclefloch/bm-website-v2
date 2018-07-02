import React from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/isFunction'

import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingBlock = ({ size = 50, show = false, children }) => {
  if (!show) {
    // it happens that the children need data to be rendered. This data is not available while the
    // loading is made.
    // But even if we don't display the children here because we are showing the loading, the children
    // is build
    // Passing the children as a function avoid to re-check the conditions to render it, that is mostly
    // the same condition pass to the `show` prop.
    if (isFunction(children)) {
      return children()
    }
    return children
  }

  return (
    <div
      className="u-flexCenter u-justifyContentCenter u-sizeFull u-absolute u-zIndexFloating"
      style={{
        left: '0',
        top: '0',
      }}
    >
      <CircularProgress size={size} thickness={5} style={{}} />
    </div>
  )
}

LoadingBlock.propTypes = {
  size: PropTypes.number,
  show: PropTypes.bool.isRequired,
}

export default LoadingBlock
