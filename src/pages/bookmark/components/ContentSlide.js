import React, { Component } from 'react'

import classNames from 'classnames'

import './slide_content.scss'

import { withTheme } from '@material-ui/core/styles'
import HtmlBlock from '../../../components/html/HtmlBlock'
import SlideNavigation from './SlideNavigation'

class SlideContent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0, // TODO: use url query
      isFullScreen: true,
    }
  }

  handleCurrentPageChange = (newPage) => {
    this.setState({ currentPage: newPage })
    // TODO: update url query
  }

  handleToggleFullScreenMode = () => {
    this.setState({ isFullScreen: !this.state.isFullScreen })
  }

  handleNext = () => {
    const newPageNb = this.state.currentPage + 1

    if (newPageNb < this.props.bookmark.nbSlides) {
      this.handleCurrentPageChange(newPageNb)
    }
  }

  render() {
    const { bookmark } = this.props;

    const isFullScreen = this.state.isFullScreen

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
        background: this.props.theme.app.background.dark,
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
              content={bookmark.slides[this.state.currentPage]}
            />
          </div>
        </div>

        <SlideNavigation
          currentPage={this.state.currentPage}
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

export default withTheme()(SlideContent)
