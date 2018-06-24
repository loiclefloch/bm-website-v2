import React from 'react'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { AvatarWithDefault } from '../../../components/avatar'
import { grey700 } from '@material-ui/core/colors/grey'

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
  },
  avatar: {
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  domain: {
    verticalAlign: 'middle',
    display: 'inline-block',
    paddingLeft: '10px',
    color: grey700,
  },
})

const HeaderMetaDomain = ({ bookmark, classes }) => {

  return (
    <div className={classes.root}>
      {bookmark.icon &&
        <AvatarWithDefault
          src={bookmark.icon}
          placeholder={bookmark.domain}
          size='20px'
          className={classes.avatar}
        />
      }

      <a
        href={bookmark.url}
        target="_blank"
        className={classNames("link", classes.domain)}
        rel="noopener noreferrer"
      >
        {bookmark.domain}
      </a>
    </div>
  )
}

export default withStyles(styles)(HeaderMetaDomain)
