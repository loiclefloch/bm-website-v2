import React, { Component } from 'react';

// must be on top, otherwise override header / footer css.
import './reset_css.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import { indigo500 } from 'material-ui/styles/colors';


import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import './layout.css'

class Layout extends Component {
  render() {
    const { children } = this.props

    // const muiTheme = getMuiTheme(lightBaseTheme)

    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: indigo500,
      },
      appBar: {
        height: 50,
      },
    });


    return (
      <MuiThemeProvider
        muiTheme={muiTheme}
      >
        <div id="layout">
          <Header
            isLoggedIn={true}
          />

          <Sidebar
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
