import React from 'react'

import './content.scss'

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
    <div className="bookmark_content">
      <HtmlBlock
        content={bookmark.content}
      />
    </div>
  )
}

export default Content
