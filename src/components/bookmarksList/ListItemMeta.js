import React from 'react'
import isEmpty from 'lodash/isEmpty'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { AvatarWithDefault } from 'components/avatar'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
  },
  avatarArea: {
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  authorArea: {
    verticalAlign: 'middle',
    display: 'inline-block',
    paddingLeft: '10px',
  },
})

const AuthorAvatar = ({ author, authorAvatar }) => {
  if (isEmpty(author)) {
    return null
  }
  return <AvatarWithDefault src={authorAvatar} placeholder={author} />
}

const Meta = ({ websiteInfo, classes }) => {
  const { author, authorAvatar } = websiteInfo
  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return null
  }

  return (
    <div className={classes.root}>
      <div className={classes.avatarArea}>
        <AuthorAvatar author={author} authorAvatar={authorAvatar} />
      </div>
      <div className={classes.authorArea}>
        <Typography>{author}</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Meta)
