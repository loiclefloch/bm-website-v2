import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'reacticoon/routing'

const styles = theme => ({
  root: {
    border: '1px solid #ccc',
    '&:hover': {
      background: theme.app.background.dark,
    },
  },
  text: {
    textTransform: 'none',
    color: theme.app.background.dark,

    '&:hover': {
      color: 'white',
    },
  },
})

const ButtonTagLink = ({ children, to, params, query, newTab, link, ...otherProps }) => (
  <Button
    component={props => (
      <Link to={to} params={params} query={query} newTab={newTab} {...link} {...props} />
    )}
    {...otherProps}
  >
    {children}
  </Button>
)

ButtonTagLink.getRoute = Link.getRoute

export default withStyles(styles)(ButtonTagLink)
