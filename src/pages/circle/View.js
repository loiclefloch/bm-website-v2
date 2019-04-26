import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconPeople from '@material-ui/icons/People'
import IconPerson from '@material-ui/icons/Person'
import CirclesIcon from '@material-ui/icons/GroupWork'
import Members from './components/members/Members'
import Books from './components/books/Books'

const styles = theme => ({
  root: {
    '& h3': {
      // subheading typo
      textTransform: 'uppercase',
    },
  },
  headerArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 400,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2041&q=80")',
    backgroundPosition: '100px -185px',
    position: 'relative',

    '&:after': {
      content: '""', // ::before and ::after both require content
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      opacity: '.4',
      background: theme.app.background.dark,
      zIndex: 1, // requires children to be zIndex 100
    },
  },
  icon: {
    color: 'white',
    height: 80,
    width: 80,
    zIndex: 100,
    position: 'absolute',
    top: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  },
  headerName: {
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: theme.spacing.unit * 4,
    zIndex: 100,
    fontSize: 28,
    marginTop: -(theme.spacing.unit * 6), // make title a little bit up
  },
  description: {
    color: 'white',
    fontSize: 20,
    marginLeft: theme.spacing.unit * 4,
    zIndex: 100,
  },
  numberOfMembers: {
    zIndex: 100,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing.unit * 6,
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: 0,
  },
  content: {
    padding: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit,
  },
})

const View = ({ circle, classes }) => (
  <div className={classes.root}>
    <div className={classes.headerArea}>

      <CirclesIcon className={classes.icon} />

      <Typography variant="headline" className={classes.headerName}>
        {circle.name}
      </Typography>

      <Typography classes={{ root: classes.description }}>{circle.description}</Typography>

      <div className={classes.numberOfMembers}>
        {circle.isDefaultCircle ? (
          <Tooltip title="This is your private circle" placement="top-start">
            <IconPerson />
          </Tooltip>
        ) : (
          <React.Fragment>
            <IconPeople />
            &nbsp;
            {circle.members.length}
          </React.Fragment>
        )}
      </div>
    </div>

    <Grid container className={classes.content}>
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
