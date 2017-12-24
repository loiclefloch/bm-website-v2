import React from 'react'

import PreviewPicture from './PreviewPicture'
import Description from './Description'
import Divider from 'material-ui/Divider'

const BookmarkHeader = ({ bookmark }) => {

  return (
    <div>
      <h1>{bookmark.name}</h1>

     
      {/* <PreviewPicture
        bookmark={bookmark}
      /> */}

      <Description
        bookmark={bookmark}
      />

    
      <Divider />

    </div>
  )
}

export default BookmarkHeader
