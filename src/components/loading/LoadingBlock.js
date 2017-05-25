import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from 'material-ui/CircularProgress';

import './loading_block.css'

const LoadingBlock = ({ size = 50 }) => {
  return (
    <div
      className="loading_block"
    >
      <CircularProgress
        size={size}
        thickness={5}
        className="loading_block__progress"
        style={{
          top: '40%'
        }}
      />
    </div>
  )
}

export default LoadingBlock
