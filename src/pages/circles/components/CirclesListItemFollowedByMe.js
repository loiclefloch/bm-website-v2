import React from 'react'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { red700 } from '@material-ui/core/colors/red'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
  chip: {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    height: 20,
    lineHeight: 20,
    marginLeft: 5,
    ...theme.style.flexCenter,
  },
  chipLabel: {
    height: '100%',
  },
  following: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColor,
  },
  notFollowing: {
    color: theme.palette.primary.main,
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
  },

  notFollowingText: {
    // color: theme.palette.textColor,
    // lineHeight: styles.notFollowing.lineHeight,
  },
  followingText: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    // color: styles.following.color,
    // lineHeight: styles.following.lineHeight,
  },
  adminText: {
    // color: styles.administrate.color,
    // lineHeight: styles.administrate.lineHeight,
  },
})

const Following = ({ circle, classes, onClick }) => {
  const props = { classes, onClick }

  if (circle.isAdministrateByMe) {
    return <IsAdministrateByMe {...props} />
  }

  return circle.isFollowedByMe ? <IsFollowedByMe {...props} /> : <NotFollowedByMe {...props} />
}

const IsFollowedByMe = ({ classes, onClick }) => {
  return (
    <Chip
      onClik={onClick}
      clickable
      classes={{ root: classNames(classes.chip, classes.following), label: classes.chipLabel }}
      label={
        <span className={classes.followingText}>
          <span>following &nbsp;</span>
          <DoneIcon className={classes.icon} />
        </span>
      }
    />
  )
}

const NotFollowedByMe = ({ classes, onClick }) => {
  return (
    <Chip
      onClick={onClick}
      clickable
      classes={{ root: classNames(classes.chip, classes.notFollowings), label: classes.chipLabel }}
      label="follow"
    />
  )
}

const IsAdministrateByMe = ({ classes, onClick }) => {
  return (
    <Chip
      onClick={onClick}
      clickable
      classes={{ root: classNames(classes.chip, classes.administrate), label: classes.chipLabel }}
      label="admin"
    />
  )
}

export default withStyles(styles)(Following)
