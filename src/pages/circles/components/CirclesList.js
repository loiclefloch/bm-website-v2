import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import CirclesListItem from './CirclesListItem'
import Grid from '@material-ui/core/Grid'
import LoadingList from 'components/loading/LoadingList'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.app.sidebar.width / 2,
  },
})

const ItemOnCol = ({ circle, actions }) => (
  <Grid
    ite
    xs={6}
    md={6}
    style={{
      padding: '10px',
    }}
  >
    <CirclesListItem circle={circle} actions={actions} />
  </Grid>
)

const CirclesList = ({ circles, isPending, actions, classes }) => (
  <List className={classes.root}>
    {isPending && <LoadingList listEmpty={circles} />}

    <Grid container>
      {circles.map(circle => (
        <ItemOnCol key={circle.id} circle={circle} actions={actions} />
      ))}
    </Grid>
  </List>
)

CirclesList.propTypes = {
  circles: PropTypes.array.isRequired,
}

export default withStyles(styles)(CirclesList)
