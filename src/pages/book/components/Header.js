import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ButtonLink from 'components/ButtonLink'
import CirclesIcon from '@material-ui/icons/GroupWork'
import BookIcon from '@material-ui/icons/Book'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 400,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80")',
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
  bookIcon: {
    color: 'white',
    height: 80,
    width: 80,
    zIndex: 100,
    position: 'absolute',
    top: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  },
  name: {
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
  circle: {
    color: 'white',
    fontSize: 18,
    zIndex: 100,
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    left: theme.spacing.unit * 4,
  }
})

const Header = ({ book, classes }) => (
  <div className={classes.root}>

    <BookIcon className={classes.bookIcon} />

    <Typography variant="headline" className={classes.name}>
      {book.name}
    </Typography>

    <Typography variant="subheading" className={classes.description}>
      {book.description}
    </Typography>

    <ButtonLink
      className={classes.circle}
      to={ButtonLink.getRoute('CIRCLE')}
      params={{
        circleId: book.owner.id,
      }}
    >
      <CirclesIcon />&nbsp;&nbsp;{book.owner.name}
    </ButtonLink>
  </div>
)

export default withStyles(styles)(Header)
