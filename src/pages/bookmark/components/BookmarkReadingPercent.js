import React from 'react'

import themeable from '../../../modules/theme/themeable'
import LinearProgress from 'material-ui/LinearProgress'

const BookmarkReadingPercent = ({ percentage, theme }) => (
  <LinearProgress
    mode="determinate"
    value={percentage}
    style={{
      height: '5px',
      width: '100%',
      position: 'fixed',
      textAlign: 'center',
      left: theme.sidebar.leftOf,
      top: theme.header.height,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '10',
      borderRadius: '0',
    }}
  />
)

export default themeable()(BookmarkReadingPercent)
