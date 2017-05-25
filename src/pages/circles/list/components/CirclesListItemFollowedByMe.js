import React from 'react'

import Chip from 'material-ui/Chip';
import muiThemeable from 'material-ui/styles/muiThemeable';

import './CirclesListItemFollowedByMe.css'

const renderFollowing = ({ circle, muiTheme, onTouchTap }) => {

  const styles = {
    following: {
      borderColor: muiTheme.palette.primary1Color,
      color: muiTheme.palette.primary1Color,
    },
    notFollowing: {
      borderColor: muiTheme.palette.primary3Color,
      color: muiTheme.palette.primary3Color,
    }
  }

  const props = { styles, onTouchTap }

  return circle.isFollowedByMe ? renderIsFollowedByMe(props) : renderNotFollowedByMe(props)
}

const renderIsFollowedByMe = ({ styles, onTouchTap }) => {
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

const renderNotFollowedByMe = ({ styles, onTouchTap }) => {

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

export default muiThemeable()(renderFollowing)
