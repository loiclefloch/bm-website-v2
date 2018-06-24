import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import IconButton from '@material-ui/core/IconButton'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Fullscreen from '@material-ui/icons/Fullscreen'
import FullscreenExit from '@material-ui/icons/FullscreenExit'

const styles = theme => ({
  button: {
    width: 72,
    height: 72,
    padding: 16,
    color: 'black',
  },
  textFullScreen: {
    color: 'white',
  },
})

class SlideNavigation extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown, false)
  }

  handleKeydown = event => {
    switch (event.keyCode) {
      case 27: // esc
        if (this.props.isFullScreen) {
          this.props.toggleFullScreenMode()
        }
        break

      case 37: // left
        this.handlePrevious()
        break

      case 38: // up
        break

      case 39: // right
        this.handleNext()
        break

      case 40: // down
        break

      case 72: // h
      case 74: // j
        this.handlePrevious()
        break

      case 75: // k
      case 76: // l
        this.handleNext()
        break

      default:
    }
  }

  handlePrevious = () => {
    const newPageNb = this.props.currentPage - 1

    if (newPageNb >= 0) {
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
    const { isFullScreen, classes } = this.props

    const textClass = classNames({
      [classes.textFullScreen]: isFullScreen,
    })

    const iconButtonClasses = classNames(classNames.button, textClass)

    return (
      <nav className="u-sizeFullHeight u-flexCenter u-justifyContentCenter">
        <IconButton onClick={this.handlePrevious} className={iconButtonClasses}>
          <NavigateBefore />
        </IconButton>

        <span
          className={textClass}
        >
          {this.props.currentPage + 1} / {this.props.lastPage}
        </span>

        <IconButton onClick={this.handleNext} className={iconButtonClasses}>
          <NavigateNext />
        </IconButton>

        <div>
          <IconButton onClick={this.props.toggleFullScreenMode} className={iconButtonClasses}>
            {this.props.isFullScreen ? (
              <FullscreenExit  />
            ) : (
              <Fullscreen />
            )}
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

export default withStyles(styles)(SlideNavigation)
