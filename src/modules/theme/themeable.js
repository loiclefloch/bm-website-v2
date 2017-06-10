import React from 'react'
import PropTypes from 'prop-types'
import getTheme from '../../modules/theme/getTheme'

let DEFAULT_THEME

function getDefaultTheme() {
  if (!DEFAULT_THEME) {
    DEFAULT_THEME = getTheme()
  }
  return DEFAULT_THEME
}

export default function themeable() {
  return (Component) => {
    const MuiComponent = (props, context) => {
      const { theme = getDefaultTheme() } = context

      return (
        <Component
          theme={theme}
          {...props}
        />
      )
    }

    MuiComponent.contextTypes = {
      theme: PropTypes.object.isRequired,
    }

    return MuiComponent
  }
}
