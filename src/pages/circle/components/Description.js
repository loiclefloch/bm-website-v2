import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
  },
})

const Description = ({ circle, classes }) => (
  <Typography variant="subheading" className={classes.root}>
    {circle.description}
  </Typography>
)

export default withStyles(styles)(Description)
