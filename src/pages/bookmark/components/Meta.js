import React from 'react'

import { BookmarkCrawlerStatus } from '../../../modules/bookmark/constants'

import HeaderMetaAuthor from './HeaderMetaAuthor'
import HeaderMetaDomain from './HeaderMetaDomain'

const Meta = ({ bookmark, onUpdateBookmark }) => {

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


      {bookmark.crawlerStatus !== BookmarkCrawlerStatus.CONTENT_BUG && (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 8,
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

export default Meta
