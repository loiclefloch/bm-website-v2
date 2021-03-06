import React from 'react'

import ActionBar from './ActionBar'
import TocView from './TocView'
import TagsList from './TagsList'
import Meta from './Meta'
import Divider from 'material-ui/Divider'

const RightNav = ({ bookmark, onUpdateBookmark }) => (
  <nav
    style={{
      position: 'fixed',
      right: '2vw',
      top: 100,
      width: '20vw',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 16,
            lineHeight: '20px',
          }}
        >
          {bookmark.title}
        </h1>

        <ActionBar bookmark={bookmark} onUpdateBookmark={onUpdateBookmark} />

        <div
          style={{
            marginTop: 10,
          }}
        >
          <TagsList bookmark={bookmark} />
        </div>

        <Meta bookmark={bookmark} />

        <Divider />
      </div>

      <div
        style={{
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <TocView bookmark={bookmark} />
      </div>
    </div>
  </nav>
)

export default RightNav
