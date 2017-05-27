import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'
import { CardText } from 'material-ui/Card'


const AuthorAvatar = ({ authorName, authorAvatar }) => {
  return (
    <AvatarWithDefault
      src={authorAvatar}
      placeholder={authorName}
    />
  )
}

const HeaderMetaAuthor = ({ websiteInfo })  => {

  if (!websiteInfo || !websiteInfo.meta) {
    return (null)
  }
  const meta = websiteInfo.meta

  return (
    <CardText>
      <div
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      >
        <AuthorAvatar
          author={websiteInfo.author}
          authorAvatar={websiteInfo.authorAvatar}
        />
      </div>
      <div
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
          paddingLeft: '10px',
        }}
      >
        {websiteInfo.author}
      </div>
    </CardText>
  )
}

export default HeaderMetaAuthor
