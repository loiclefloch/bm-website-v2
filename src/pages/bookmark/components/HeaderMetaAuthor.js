import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from '@material-ui/core/styles'
import { AvatarWithDefault } from '../../../components/avatar'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
  },
  author: {
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  avatar: {
    verticalAlign: 'middle',
    display: 'inline-block',
  },
})

const AuthorAvatar = ({ authorName, authorAvatar }) => {
  return <AvatarWithDefault src={authorAvatar} placeholder={authorName} />
}

const HeaderMetaAuthor = ({ websiteInfo, classes }) => {
  const { author, authorAvatar } = websiteInfo

  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return null
  }

  return (
    <div className={classes.root}>
      {!isEmpty(author) && (
        <div className={classes.author}>
          {author.indexOf('http') !== -1 ? (
            <a href={author} target="_blank" rel="noopener noreferrer">
              {author}
            </a>
          ) : (
            <span>{author}</span>
          )}
        </div>
      )}

      {!isEmpty(authorAvatar) && (
        <div className={classes.avatar}>
          <AuthorAvatar author={author} authorAvatar={authorAvatar} />
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(HeaderMetaAuthor)
