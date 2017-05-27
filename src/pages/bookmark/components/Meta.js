import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'

import HeaderMetaAuthor from './HeaderMetaAuthor'

const Meta = ({ bookmark }) => {

  const Icon = ({ bookmark }) => {
    return (
      <AvatarWithDefault
        src={bookmark.icon}
        placeholder={bookmark.domain}
      />
    )
  }

  return (
    <div>
      {bookmark.icon &&
        <Icon
          bookmark={bookmark}
        />
      }

      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {bookmark.prettyUrl}
      </a>

      <br />

      <HeaderMetaAuthor
        websiteInfo={bookmark.websiteInfo}
      />
    </div>
  )
}

export default Meta
