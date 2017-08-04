import React, { Component } from 'react'

import ui from 'redux-ui'

import './slide_content.scss'

import HtmlBlock from '../../../components/html/HtmlBlock'
import SlideNavigation from './SlideNavigation'

@ui({
  persist: false,
  state: {
    currentPage: 0,
  },
})
class SlideContent extends Component {

  handleCurrentPageChange = (newPage) => {
    this.props.updateUI({ currentPage: newPage })
  }

  handleNext = () => {
    const newPageNb = this.props.currentPage + 1

    if (newPageNb < this.props.bookmark.nbSlides) {
      this.handleCurrentPageChange(newPageNb)
    }
  }

  render() {
    const { bookmark, ui } = this.props;

    return (
      <div className="slide_content u-flexColumn u-justifyContentCenter">
        <div
          onClick={this.handleNext}
        >
          <HtmlBlock
            content={bookmark.slides[ui.currentPage]}
          />
        </div>

        <SlideNavigation
          currentPage={ui.currentPage}
          firstPage={0}
          lastPage={bookmark.nbSlides}
          onCurrentPageChange={this.handleCurrentPageChange}
          toggleFullScreenMode={() => {}}
          changeUrl={() => {}}
        />
      </div>
    )
  }
}

export default SlideContent
