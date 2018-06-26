import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    background: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  },
})

const BlockError = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
)

export default withStyles(styles)(BlockError)