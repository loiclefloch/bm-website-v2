import React from 'react'

import { BookmarkCrawlerStatus } from '../../../modules/bookmark/constants'

import ReadingTime from './ReadingTime'

const BookmarkActionBar = ({ bookmark, onUpdateBookmark }) => {
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

      {/* TODO: icon delete */}

      {bookmark.crawlerStatus !== BookmarkCrawlerStatus.CONTENT_BUG && (
        <div
          style={{
            marginTop: 20,
            cursor: 'pointer',
          }}
          onClick={() => {
            const r = window.confirm('Are you sure ?')
            if (r === true) {
              onUpdateBookmark({
                ...bookmark,
                crawlerStatus: BookmarkCrawlerStatus.CONTENT_BUG,
              })
            }
          }}
        >
          Marquer le contenu comme bugué
        </div>
      )}
    </div>
  )
}

export default BookmarkActionBar
