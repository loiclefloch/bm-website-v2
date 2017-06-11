import React from 'react'

import Chip from 'material-ui/Chip';
import themeable from '../../../modules/theme/themeable'

import { red700 } from 'material-ui/styles/colors';
import DoneIcon from 'material-ui/svg-icons/action/done';

const Following = ({ circle, theme, onTouchTap }) => {

  const styles = {
    chip: {
      borderColor: theme.palette.primary1Color,
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: 'transparent',
    },
    following: {
      backgroundColor: theme.palette.primary1Color,
      color: theme.palette.textColor,
    },
    notFollowing: {
      color: theme.palette.primary1Color,
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    administrate: {
      borderColor: red700,
      color: red700,
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
      className="pointer u-height20 u-marginLeft5 u-flexCenter"
      onTouchTap={onTouchTap}
      style={{ ...styles.chip, ...styles.following}}
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
          color={styles.following.color}
        />
      </span>
    </Chip>
  )
}

const NotFollowedByMe = ({ styles, onTouchTap }) => {

  return (
    <Chip
      className="pointer u-height20 u-marginLeft5 u-flexCenter"
      style={{ ...styles.chip, ...styles.notFollowing}}
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
      className="pointer u-height20 u-marginLeft5 u-flexCenter"
      onTouchTap={onTouchTap}
      style={{ ...styles.chip, ...styles.administrate}}
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
