import React, { Component } from 'react'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeProvider from '../modules/theme/ThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import { getTheme } from '../modules/theme'

import {
  isFetchingMe,
  isLoggedIn,
  getMe,
} from '../modules/user'

class Layout extends Component {

  render() {

    const { theme, isFetchingMe } = this.props

    const muiTheme = getMuiTheme({ ...lightBaseTheme, ...theme });

    return (
      <MuiThemeProvider
        muiTheme={muiTheme}
      >
        <ThemeProvider
          themes={[muiTheme]}
          // themeInd={1}
          override
        >
          {this.props.children}
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
    isFetchingMe: isFetchingMe(state),
  }
}

export default connect(mapStateToProps, {
})(Layout)
