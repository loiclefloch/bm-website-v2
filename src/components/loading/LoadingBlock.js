import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress';

const LoadingBlock = ({ size = 50, show = false }) => {
  if (!show) {
    return (null)
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
