import React from 'react'
import ContentLoader from 'react-content-loader'

const ContentLoaderView = () => {
  return (
    <div
    style={{
      margin: '0 auto',
    }}
    >
      <ContentLoader type="list" width="400" height="400" />
    </div>
  )
}

export default ContentLoaderView
