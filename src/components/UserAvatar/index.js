import React from 'react'
import isEmpty from 'lodash/isEmpty'

import orange from '@material-ui/core/colors/orange'
import brown from '@material-ui/core/colors/brown'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import pink from '@material-ui/core/colors/pink'
import teal from '@material-ui/core/colors/amber'
import amber from '@material-ui/core/colors/teal'
import blueGrey from '@material-ui/core/colors/blueGrey'

import { withStyles } from '@material-ui/core/styles'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import Avatar from '@material-ui/core/Avatar'

const colors = [
  amber[300],
  blueGrey[300],
  orange[300],
  purple[300],
  brown[300],
  green[300],
  blue[300],
  teal[300],
  pink[300],
]

//
// Get a color according to the first letter of the last name
//
const getColor = user =>
  isEmpty(user.username)
    ? blueGrey[300] // default value
    : colors[user.username.toLowerCase().charCodeAt(0) % colors.length]

const styles = theme => ({
  root: {
    textTransform: 'uppercase',
  },
})

const UserAvatar = ({ user, classes, size = 60 }) => {
  const color = getColor(user)

  return (
    <Avatar
      classes={{ root: classes.root }}
      style={{
        backgroundColor: lighten(color, 0.6),
        color: color,
        width: size,
        height: size,
        fontSize: size / 3,
      }}
    >
      <span style={{ color }}>
        {!isEmpty(user.username) && user.username[0]}
      </span>
    </Avatar>
  )
}

export default withStyles(styles)(UserAvatar)
