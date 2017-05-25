import React from 'react'

import Chip from 'material-ui/Chip';
import muiThemeable from 'material-ui/styles/muiThemeable'

import './CirclesListItemFollowedByMe.css'

import { red700 } from 'material-ui/styles/colors';


const Following = ({ circle, muiTheme, onTouchTap }) => {

  const styles = {
    following: {
      borderColor: muiTheme.palette.primary1Color,
      color: muiTheme.palette.primary1Color,
    },
    notFollowing: {
      borderColor: muiTheme.palette.primary3Color,
      color: muiTheme.palette.primary3Color,
    },
    administrate: {
      borderColor: red700,
      color: red700,
    }
  }

  const props = { styles, onTouchTap }

  if (circle.isAdministrateByMe) {
    return (
      <IsAdministrateByMe
        {...props}
      />
    )
  }

  return circle.isFollowedByMe ? <IsFollowedByMe {...props} /> : <NotFollowedByMe {...props} />
}

const IsFollowedByMe = ({ styles, onTouchTap }) => {
  return (
    <Chip
      className="CirclesListItemFollowedByMe pointer"
      onTouchTap={onTouchTap}
      style={styles.following}
    >
      <span
        style={{
          color: styles.following.color,
        }}
      >
        following
      </span>
    </Chip>
  )
}

const NotFollowedByMe = ({ styles, onTouchTap }) => {

  return (
    <Chip
      className="CirclesListItemFollowedByMe pointer"
      style={styles.notFollowing}
    >
      <span
        style={{
          color: styles.notFollowing.color
        }}
      >
        follow
      </span>
    </Chip>
  )
}

const IsAdministrateByMe = ({ styles, onTouchTap }) => {
  return (
    <Chip
      className="CirclesListItemFollowedByMe pointer"
      onTouchTap={onTouchTap}
      style={styles.administrate}
    >
      <span
        style={{
          color: styles.administrate.color,
        }}
      >
        admin
      </span>
    </Chip>
  )
}

export default muiThemeable()(Following)
