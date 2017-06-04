import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import NavigateNext from 'material-ui/svg-icons/image/navigate-next'
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before'
import Fullscreen from 'material-ui/svg-icons/navigation/fullscreen'
import FullscreenExit from 'material-ui/svg-icons/navigation/fullscreen-exit'

class SlideNavigation extends Component {

  handlePrevious = () => {
    const newPageNb = this.props.currentPage - 1

    if (newPageNb > 0) {
      this.props.onCurrentPageChange(newPageNb)
    }
  }

  handleNext = () => {
    const newPageNb = this.props.currentPage + 1

    if (newPageNb < this.props.lastPage) {
      this.props.onCurrentPageChange(newPageNb)
    }
  }

  render() {
    const styles = {
      button: {
        width: 72,
        height: 72,
        padding: 16,
      },
      smallIcon: {
        width: 36,
        height: 36,
      },
    }

    return (
      <nav
        className="u-sizeFullHeight u-flexCenter u-justifyContentCenter"
      >

        <IconButton
          onClick={this.handlePrevious}
          style={styles.button}
          iconStyle={styles.icon}
        >
          <NavigateBefore />
        </IconButton>

        <span>
          {this.props.currentPage + 1} / {this.props.lastPage}
        </span>

        <IconButton
          onClick={this.handleNext}
        >
          <NavigateNext />
        </IconButton>

        <div>
          <IconButton
            onClick={this.props.toggleFullScreenMode}
          >
            {this.props.isFullScreen ?
              <FullscreenExit />
              :
              <Fullscreen />
            }
          </IconButton>
        </div>
      </nav>
    )
  }
}

SlideNavigation.defaultProps = {
  isFullScreen: false,
}

SlideNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  firstPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  toggleFullScreenMode: PropTypes.func.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  changeUrl: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool,
}

export default SlideNavigation
