import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress';

const LoadingBlock = ({ size = 50, show = false }) => {
  if (!show) {
    return (null)
  }

  return (
    <div
      className="u-flexCenter u-justifyContentCenter u-sizeFull u-absolute u-zIndexFloating"
      style={{
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <CircularProgress
        size={size}
        thickness={5}
        style={{

        }}
      />
    </div>
  )
}

LoadingBlock.propTypes = {
  size: PropTypes.number,
  show: PropTypes.bool.isRequired,
}

export default LoadingBlock
