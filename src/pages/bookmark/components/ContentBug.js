import React from 'react'

const ContentBug = ({ bookmark }) => (
  <div
    style={{
      marginTop: 50,
      textAlign: 'center',
    }}
  >
    <h2>Content marked as bugued.</h2>

    <div
      style={{
        marginTop: 50,
      }}
    >
      <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
        Go to the orginal website
      </a>
    </div>
  </div>
)

export default ContentBug
