import React, { Component } from 'react'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeProvider from '../modules/theme/ThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import { getTheme } from '../modules/theme'

/**
 * The content of the app will have the `router` as children.
 * Use it to englobe the router with providers in order to not re-render those providers when the
 * route change
 *
 * Ex: MuiThemeProvider, CssThemeProvider, I18n initial loading, ...
 */
class Content extends Component {
  render() {
    const { theme } = this.props

    const muiTheme = getMuiTheme({ ...lightBaseTheme, ...theme })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <ThemeProvider
          themes={[muiTheme]}
          // themeInd={1}
          override
        >
          {this.props.children}
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
  }
}

export default connect(mapStateToProps, {})(Content)
