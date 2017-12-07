import React, { Component } from 'react'

import ui from 'redux-ui'
import classNames from 'classnames'

import './slide_content.scss'

import HtmlBlock from '../../../components/html/HtmlBlock'
import themeable from '../../../modules/theme/themeable'
import SlideNavigation from './SlideNavigation'

@ui({
  persist: false,
  state: {
    currentPage: 0, // TODO: use url query
    isFullScreen: true,
  },
})
class SlideContent extends Component {

  handleCurrentPageChange = (newPage) => {
    this.props.updateUI({ currentPage: newPage })
    // TODO: update url query
  }

  handleToggleFullScreenMode = () => {
    this.props.updateUI({ isFullScreen: !this.props.ui.isFullScreen })
  }

  handleNext = () => {
    const newPageNb = this.props.ui.currentPage + 1

    if (newPageNb < this.props.bookmark.nbSlides) {
      this.handleCurrentPageChange(newPageNb)
    }
  }

  render() {
    const { bookmark, ui } = this.props;

    const isFullScreen = ui.isFullScreen

    let style = {}
    let contentStyle = {}

    if (isFullScreen) {
      style = {
        ...style,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3000,
        background: this.props.theme.background.dark,
      }

      contentStyle = {
        ...contentStyle,
        textAlign: 'center',
      }
    }


    return (
      <div
        className={classNames("slide_content u-flexColumn u-justifyContentCenter", {
          isFullScreen: isFullScreen
        })}
        style={style}
      >
        <div
          style={contentStyle}
        >
          <div
            onClick={this.handleNext}
          >
            <HtmlBlock
              content={bookmark.slides[ui.currentPage]}
            />
          </div>
        </div>

        <SlideNavigation
          currentPage={ui.currentPage}
          firstPage={0}
          lastPage={bookmark.nbSlides}
          isFullScreen={isFullScreen}
          onCurrentPageChange={this.handleCurrentPageChange}
          toggleFullScreenMode={this.handleToggleFullScreenMode}
          changeUrl={() => {}}
        />
      </div>
    )
  }
}

export default themeable()(SlideContent)
