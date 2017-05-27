import React from 'react'

import VideoContent from './VideoContent'
import SlideContent from './SlideContent'
import HtmlBlock from '../../../components/html/HtmlBlock'

const Content = ({ bookmark }) => {

  if (bookmark.isTypeVideo) {
    return (
      <VideoContent
        bookmark={bookmark}
      />
    )
  }

  if (bookmark.isTypeSlide) {
    return (
      <SlideContent
        bookmark={bookmark}
      />
    )
  }

  return (
    <div>
      <HtmlBlock
        content={bookmark.content}
      />
    </div>
  )
}

export default Content
