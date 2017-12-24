import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'
import { CardText } from 'material-ui/Card'
import isEmpty from 'lodash/isEmpty'

const AuthorAvatar = ({ authorName, authorAvatar }) => {
  return <AvatarWithDefault src={authorAvatar} placeholder={authorName} />
}

const HeaderMetaAuthor = ({ websiteInfo }) => {
  const { author, authorAvatar } = websiteInfo

  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return null
  }

  return (
    <CardText
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      
      {!isEmpty(author) && (
        <div
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            paddingLeft: '10px',
          }}
        >
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
        <div
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
          }}
        >
          <AuthorAvatar author={author} authorAvatar={authorAvatar} />
        </div>
      )}
    </CardText>
  )
}

export default HeaderMetaAuthor
