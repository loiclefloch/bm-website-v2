import React, { Component } from 'react'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeProvider from '../../modules/theme/ThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import DialogRenderer from './components/DialogRenderer'

import { getTheme } from '../../modules/theme'

import {
  fetchMe,

  isFetchingMe,
  isLoggedIn,
  getMe,
} from '../../modules/user'

import {
  fetchMeTags
} from '../../modules/tag'

class Layout extends Component {

  componentDidMount() {
    this.props.fetchMe()
    this.props.fetchMeTags()
  }

  renderLayout() {
    const { isLoggedIn, me, children } = this.props
    return (
      <div id="layout">
        <Header
          isLoggedIn={isLoggedIn}
          me={me}
        />

        <Sidebar
          isLoggedIn={isLoggedIn}
          me={me}
        />

        <div id="container">
          {children}
        </div>

        <Footer
        />

        <DialogRenderer
        />
      </div>
    )
  }

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
          {isFetchingMe ? this.renderPageLoading() : this.renderLayout() }
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
    isFetchingMe: isFetchingMe(state),
    isLoggedIn: isLoggedIn(state),
    me: getMe(state),
  }
}

export default connect(mapStateToProps, {
  fetchMe,
  fetchMeTags,
})(Layout)
