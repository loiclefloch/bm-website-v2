import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
})

const PageNotFoundPage = ({ classes }) => (
  <div className={classes.root}>
    <h1>Page not found</h1>
  </div>
)

export default withStyles(styles)(PageNotFoundPage)
