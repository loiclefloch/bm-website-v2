import React from 'react'
// https://github.com/danilowoz/react-content-loader
// http://danilowoz.com/create-content-loader/
import ContentLoader from 'react-content-loader'

const ContentLoaderView = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        paddingTop: 50,
        textAlign: 'center',
        width: '100%',
        maxWidth: '750px',
      }}
    >
      <ContentLoader
        height={160}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="15" rx="4" ry="4" width="200" height="8.4" />
        <rect x="0" y="30" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="50" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="60" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="70" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="90" rx="3" ry="3" width="201" height="6.4" />
      </ContentLoader>
    </div>
  )
}

export default ContentLoaderView
