import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends Component {
  render() {
    const { children } = this.props

    const theme = getMuiTheme(lightBaseTheme)

    return (
      <MuiThemeProvider
        muiTheme={theme}
      >
        <div className="App">
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
