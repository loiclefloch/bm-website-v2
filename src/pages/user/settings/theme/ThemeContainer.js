import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  changeCurrentTheme,
  getTheme,
  getDefaultTheme,
} from '../../../../modules/theme'

import ThemeView from './components/ThemeView'
import FlatButton from 'material-ui/FlatButton'

import {
  indigo500,
  pink400,
  purple600,
} from 'material-ui/styles/colors';

class ThemeContainer extends Component {

  handleChangeTheme = () =>{
    const colors = [
      indigo500,
      pink400,
      purple600,
    ]

    // get random color
    const color = colors[Math.floor(Math.random() * colors.length)]

    this.props.changeCurrentTheme({
      palette: {
        primary1Color: color,
      }
    })
  }

  render() {
    const { theme, defaultTheme } = this.props

    return (
      <div>
        <h2>Current theme</h2>

        <ThemeView
          theme={theme}
        />

        <FlatButton
          label="test change theme"
          onClick={this.handleChangeTheme}
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
  changeCurrentTheme
})(ThemeContainer)
