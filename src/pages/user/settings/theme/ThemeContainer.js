import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getTheme, getDefaultTheme } from '../../../../modules/theme'

import ThemeView from './components/ThemeView'

class ThemeContainer extends Component {
  render() {
    const { theme, defaultTheme } = this.props

    return (
      <div>
        <h2>Current theme</h2>

        <ThemeView
          theme={theme}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
    defaultTheme: getDefaultTheme(state),
  }
}

export default connect(mapStateToProps, {
})(ThemeContainer)
