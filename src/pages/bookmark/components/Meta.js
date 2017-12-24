import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'

import HeaderMetaAuthor from './HeaderMetaAuthor'
import HeaderMetaDomain from './HeaderMetaDomain'

const Meta = ({ bookmark }) => {

  return (
    <div
      className=""
    >

      <HeaderMetaAuthor
        websiteInfo={bookmark.websiteInfo}
      />

      <HeaderMetaDomain
        bookmark={bookmark}
      />

    </div>
  )
}

export default Meta
