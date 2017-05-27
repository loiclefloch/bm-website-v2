import React, { Component } from 'react'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

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

class Layout extends Component {

  componentDidMount() {
    this.props.fetchMe()
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

    const muiTheme = getMuiTheme(theme);

    return (
      <MuiThemeProvider
        muiTheme={muiTheme}
      >
        {isFetchingMe ? this.renderPageLoading() : this.renderLayout() }

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
})(Layout)
