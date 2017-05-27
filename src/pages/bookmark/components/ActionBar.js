import React from 'react'

import ReadingTime from './ReadingTime'

const BookmarkActionBar = ({ bookmark }) => {
  return (
    <div>
      <ReadingTime
        readingTime={bookmark.readingTime}
      />

      {/* TODO: icon delete */}
    </div>
  )
}

export default BookmarkActionBar
