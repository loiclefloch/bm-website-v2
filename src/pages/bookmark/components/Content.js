import React from 'react'

import './content.scss'

import HtmlBlock from '../../../components/html/HtmlBlock'
import ScrollPercentage from '../../../components/scroll/ScrollPercentage'
import VideoContent from './VideoContent'
import SlideContent from './SlideContent'
import BookmarkReadingPercent from './BookmarkReadingPercent'

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
    <ScrollPercentage>
      {({ percentage }) => (
        <div className="bookmark_content">
          <BookmarkReadingPercent
            percentage={percentage * 100}
          />
          <HtmlBlock
            content={bookmark.content}
          />
        </div>
      )}
    </ScrollPercentage>
  )
}

export default Content
