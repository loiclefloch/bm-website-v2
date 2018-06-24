import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = theme => ({
  root: {
    height: '5px',
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
    left: theme.app.sidebar.width,
    top: theme.app.header.height,
    zIndex: '10',
    borderRadius: '0',
  },
  bar: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
})

const BookmarkReadingPercent = ({ percentage, classes }) => (
  <LinearProgress
    variant="determinate"
    value={percentage}
    classes={classes}
  />
)

export default withStyles(styles)(BookmarkReadingPercent)
