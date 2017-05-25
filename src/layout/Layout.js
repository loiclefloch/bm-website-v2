import React, { Component } from 'react';

// must be on top, otherwise override header / footer css.
import './reset_css.css'

import './lib/font-awesome/css/font-awesome.min.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Header from './components/Header'
import Footer from './components/Footer'

import './layout.css'

class Layout extends Component {
  render() {
    const { children } = this.props

    const theme = getMuiTheme(lightBaseTheme)

    return (
      <MuiThemeProvider
        muiTheme={theme}
      >
        <div id="layout">
          <Header
            isLoggedIn={true}
          />

          <div id="container">
            {children}
          </div>

          <Footer
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
