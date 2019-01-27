import React from 'react'

import ReadingTime from './ReadingTime'

const BookmarkActionBar = ({ bookmark }) => {
  return (
    <div>
      <ReadingTime
        readingTime={bookmark.readingTime}
        style={{
          marginTop: '10px',
          display: 'inline-block',
          color: 'gray',
        }}
      />
    </div>
  )
}

export default BookmarkActionBar
