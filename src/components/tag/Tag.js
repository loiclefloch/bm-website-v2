import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'

import SelectedView from '../icon/SelectedView'

const Tag = (props) => {

  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick(props.tag, event)
    }
  }

  // classNames
  const { className, squareClassName, nameClassName } = props
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
        className={`u-paddingLeft5 u-paddingRight5 u-paddingTop2 u-paddingBottom2 u-borderRadius4 u-fontSize13 ${className}`}
        style={mergedStyle}
      >
        {tag.name}
      </span>
    )
  }

  const mergedStyle = merge({}, style, {
  })

  const mergedSquareStyle = merge({}, squareStyle, {
    backgroundColor: tag.color,
    color: tag.isLightColor ? 'black' : 'white',
    width: '26px',
    height: '26px',
  })

  const mergedNameStyle = merge({}, nameStyle, {

  })

  // Tag.Mode.SQUARE_WITH_NAME
  return (
    <div
      onClick={handleClick}
      style={mergedStyle}
      className={`u-inlineBlock u-flexCenter u-justifyContentCenter u-minWidth200 ${className}`}
    >
      <div
        className={`u-tableCell u-flexCenter u-justifyContentCenter ${squareClassName}`}
        style={mergedSquareStyle}
      >
        <SelectedView
          show={isSelected}
          isLightColor={tag.isLightColor}
        />
      </div>
      <div
        className={`u-paddingLeft5 u-paddingRight5 u-fontSize16 u-tableCell ${nameClassName}`}
        style={mergedNameStyle}
      >
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
  squareClassName: PropTypes.string,
  nameClassName: PropTypes.string,

  style: PropTypes.object,
  squareStyle: PropTypes.object,
  nameStyle: PropTypes.object,

  mode: PropTypes.oneOf([ Tag.Mode.SQUARE_WITH_NAME, Tag.Mode.DEFAULT ]),

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
  squareClassName: '',
  nameClassName: '',
  isSelected: false,
}

export default Tag
