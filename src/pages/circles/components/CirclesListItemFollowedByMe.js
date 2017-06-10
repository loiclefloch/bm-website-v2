import React from 'react'

import Chip from 'material-ui/Chip';
import themeable from '../../../modules/theme/themeable'

import { red700 } from 'material-ui/styles/colors';
import DoneIcon from 'material-ui/svg-icons/action/done';

const Following = ({ circle, theme, onTouchTap }) => {

  const styles = {
    following: {
      borderColor: theme.palette.primary1Color,
      backgroundColor: theme.palette.primary1Color,
      color: theme.palette.primary3Color,
      boxSizing: 'content-box',

      //
      display: 'inline-block',
      borderWidth: '1px',
      borderStyle: 'solid',
      lineHeight: '20px',
    },
    notFollowing: {
      borderColor: theme.palette.primary1Color,
      color: theme.palette.primary1Color,
      backgroundColor: 'transparent',

      //
      display: 'inline-block',
      borderWidth: '1px',
      borderStyle: 'solid',
      lineHeight: '20px',
    },
    administrate: {
      borderColor: red700,
      color: red700,
      backgroundColor: 'transparent',

      //
      display: 'inline-block',
      borderWidth: '1px',
      borderStyle: 'solid',
      lineHeight: '20px',
    },
    icon: {
      width: '15px',
      height: '15px',
      color: theme.palette.primary3Color,
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
          lineHeight: styles.following.lineHeight
        }}
      >
        following
        &nbsp;
        <DoneIcon
          style={styles.icon}
        />
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
          color: styles.notFollowing.color,
          lineHeight: styles.notFollowing.lineHeight
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
          lineHeight: styles.administrate.lineHeight
        }}
      >
        admin
      </span>
    </Chip>
  )
}

export default themeable()(Following)
