import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'
import { CardText } from 'material-ui/Card'
import isEmpty from 'lodash/isEmpty'

const AuthorAvatar = ({ authorName, authorAvatar }) => {
  return (
    <AvatarWithDefault
      src={authorAvatar}
      placeholder={authorName}
    />
  )
}

const HeaderMetaAuthor = ({ websiteInfo })  => {

  const { author, authorAvatar } = websiteInfo

  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return (null)
  }

  return (
    <CardText>
      {!isEmpty(authorAvatar) &&
        <div
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
          }}
        >
          <AuthorAvatar
            author={author}
            authorAvatar={authorAvatar}
          />
        </div>
      }
      {!isEmpty(author) &&
        <div
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            paddingLeft: '10px',
          }}
        >
          {author}
        </div>
      }
    </CardText>
  )
}

export default HeaderMetaAuthor
