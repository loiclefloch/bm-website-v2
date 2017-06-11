import React from 'react'

import ActionBar from './ActionBar'
import PreviewPicture from './PreviewPicture'
import Description from './Description'
import Meta from './Meta'
import Divider from 'material-ui/Divider'
import TagsList from './TagsList'

const BookmarkHeader = ({ bookmark }) => {

  return (
    <div>
      <h1>{bookmark.name}</h1>

      <ActionBar
        bookmark={bookmark}
      />

      {/* <PreviewPicture
        bookmark={bookmark}
      /> */}

      <Description
        bookmark={bookmark}
      />

      <TagsList
        bookmark={bookmark}
      />

      {/* TODO: tags list */}
      <Divider />

      <Meta
        bookmark={bookmark}
      />

      <Divider />

    </div>
  )
}

export default BookmarkHeader
