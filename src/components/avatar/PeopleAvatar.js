import React from 'react';
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import Avatar from 'material-ui/Avatar'

const renderText = (props) => {
  const { placeholder, ...other } = props;

  return (
    <Avatar
      {...other}
    >
      {placeholder.toUpperCase()}
    </Avatar>
  )
}

const renderPlaceholder = (props) => {
  props.placeholder = props.placeholder[0];

  // TODO: if default is url
  return renderText(props)
}

const AvatarWithDefault = (props) => {
  const { src, ...otherProps } = props

  if (isEmpty(src)) {
    return renderPlaceholder(otherProps)
  }

  return (
    <Avatar
      src={src}
      {...otherProps}
    />
  )
}

AvatarWithDefault.propTypes = {
  src: PropTypes.string,

  // Can be an url or a string.
  placeholder: PropTypes.string,
}


export default AvatarWithDefault
