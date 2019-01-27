import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

import SelectedView from '../icon/SelectedView'

const styles = theme => ({
  root: {
    display: 'inline-block',
    justifyContent: 'center',
    minWidth: 20,
    cursor: 'pointer',
  },
  modeDefault: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: '4px',
    fontSize: 13,
  },
  modeSquareSquare: {
    ...theme.style.flexCenter,
    display: 'table-cell',
    justifyContent: 'center',
  },
  modeSquareName: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
    display: 'table-cell',
  },
})

const Tag = props => {
  const handleClick = event => {
    if (props.onClick) {
      props.onClick(props.tag, event)
    }
  }

  // classNames
  const { classes } = props
  // styles
  const { style, squareStyle, nameStyle } = props
  // other props
  const { tag, mode, isSelected } = props

  if (mode === Tag.Mode.DEFAULT) {
    const mergedStyle = merge({}, squareStyle, style, {
      backgroundColor: tag.color,
      color: tag.isLightColor ? 'black' : 'white',
    })

    return (
      <span
        onClick={handleClick}
        className={classNames(classes.root, classes.modeDefault)}
        style={mergedStyle}
      >
        {tag.name}
      </span>
    )
  }

  const mergedStyle = merge({}, style, {})

  const mergedSquareStyle = merge({}, squareStyle, {
    backgroundColor: tag.color,
    color: tag.isLightColor ? 'black' : 'white',
    width: '26px',
    height: '26px',
  })

  const mergedNameStyle = merge({}, nameStyle, {})

  // Tag.Mode.SQUARE_WITH_NAME
  return (
    <div onClick={handleClick} style={mergedStyle} className={classes.root}>
      <div className={classes.modeSquareSquare} style={mergedSquareStyle}>
        <SelectedView show={isSelected} isLightColor={tag.isLightColor} />
      </div>
      <div className={classes.modeSquareName} style={mergedNameStyle}>
        {tag.name}
      </div>
    </div>
  )
}

Tag.Mode = {
  /**
   * The name of the tag with the tag's color as background
   */
  DEFAULT: 'DEFAULT',

  /**
   * A square with the tag's color, the tag's name on the right
   */
  SQUARE_WITH_NAME: 'SQUARE_WITH_NAME',
}

Tag.propTypes = {
  tag: PropTypes.object.isRequired,
  className: PropTypes.string,
  nameClassName: PropTypes.string,

  style: PropTypes.object,
  squareStyle: PropTypes.object,
  nameStyle: PropTypes.object,

  mode: PropTypes.oneOf([Tag.Mode.SQUARE_WITH_NAME, Tag.Mode.DEFAULT]),

  /**
   * @param tag
   * @param event
   *
   * @type {Function}
   */
  onClick: PropTypes.func,

  /**
   * @type {Boolean}
   */
  isSelected: PropTypes.bool,
}

Tag.defaultProps = {
  mode: Tag.Mode.DEFAULT,
  className: '',
  isSelected: false,
}

export default withStyles(styles)(Tag)
