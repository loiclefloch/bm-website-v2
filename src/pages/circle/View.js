import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Header from './components/Header'
import Description from './components/Description'
import Members from './components/members/Members'
import Books from './components/books/Books'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    paddingLeft: '5vw', // TODO: remove on mobile
  },
  headerArea: {
    maxWidth: '800px',
    margin: '0 auto',
  },
})

const View = ({ circle, classes }) => (
  <div className={classes.root}>
    <div className={classes.headerArea}>
      <Header circle={circle} />

      <Description circle={circle} />
    </div>

    <Grid container>
      <Grid item sm={circle.isDefaultCircle ? 12 : 9}>
        <Books circle={circle} />
      </Grid>

      {!circle.isDefaultCircle && (
        <Grid item sm={3}>
          <Members circle={circle} />
        </Grid>
      )}
    </Grid>
  </div>
)

export default withStyles(styles)(View)
