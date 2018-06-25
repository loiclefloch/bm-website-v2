import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Header from './components/Header'

const styles = theme => ({
  root: {
    maxWidth: '800px',
    marginTop:  theme.spacing.unit * 4,
    paddingLeft: '5vw', // TODO: remove on mobile
  },
})

const View = ({ circle, classes }) => (
  <div className={classes.root}>
    <Header circle={circle} />
  </div>
)

export default withStyles(styles)(View)
