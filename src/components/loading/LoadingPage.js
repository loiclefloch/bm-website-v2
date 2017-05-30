import React from 'react'

import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';

const LoadingPage = ({ size = 50, message = '' }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '10',
      }}
    >
      <LinearProgress
        mode="indeterminate"
        style={{
          height: '5px',
          width: '100%',
          position: 'absolute',
          textAlign: 'center',
          left: '0',
          top: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: '10',
        }}
      />

      <div
        style={{
          top: '40%',
          width: '100%',
          position: 'absolute',
        }}
      >
        <CircularProgress
          size={size}
          thickness={3}
          style={{
            top: 0
          }}
        />
        <br /><br />
        {message}
        <br /><br />
        <LinearProgress
          mode="indeterminate"
          thickness={3}
          className="loading_block__progress"
          style={{
            top: '40%',
            width: '200px',
            height: '10px',
            margin: '0 auto',
          }}
        />
      </div>

    </div>
  )
}

export default LoadingPage
