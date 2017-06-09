import React from 'react'
import isEmpty from 'lodash/isEmpty'

import { CardText } from 'material-ui/Card'
import { AvatarWithDefault } from '../../../components/avatar'

const AuthorAvatar = ({ author, authorAvatar }) => {
  if (isEmpty(author)) {
    return (null)
  }
  return (
    <AvatarWithDefault
      src={authorAvatar}
      placeholder={author}
    />
  )
}

const Meta = ({ websiteInfo })  => {
  const { author, authorAvatar } = websiteInfo
  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return (null)
  }
  return (
    <CardText>
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
      <div
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
          paddingLeft: '10px',
        }}
      >
        {author}
      </div>
    </CardText>
  )
}

export default Meta
