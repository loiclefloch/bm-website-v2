import React, { Component } from 'react';

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import { getTheme } from '../../modules/theme'

class Layout extends Component {
  render() {
    const { children, theme } = this.props


    const muiTheme = getMuiTheme(theme);


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

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
  }
}

export default connect(mapStateToProps, {
})(Layout)
