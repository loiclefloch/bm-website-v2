import React from 'react'

import './content.scss'

import { BookmarkCrawlerStatus } from '../../../modules/bookmark/constants'

import ContentBug from './ContentBug'
import ContentVideo from './ContentVideo'
import ContentSlide from './ContentSlide'
import ContentArticle from './ContentArticle'

const Content = ({ bookmark }) => {

  if (bookmark.crawlerStatus !== BookmarkCrawlerStatus.RETRIEVED) {
    return (
      <ContentBug
        bookmark={bookmark}
      />
    )
  }

  if (bookmark.isTypeVideo) {
    return (
      <ContentVideo
        bookmark={bookmark}
      />
    )
  }

  if (bookmark.isTypeSlide) {
    return (
      <ContentSlide
        bookmark={bookmark}
      />
    )
  }

  return (
    <ContentArticle
      bookmark={bookmark}
    />
  )
}

export default Content
