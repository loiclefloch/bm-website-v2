import React, { Component } from 'react'

import { connect, compose } from 'reacticoon/view'

import ThemeView from './components/ThemeView'
import Button from '@material-ui/core/Button'

import { indigo500, pink400, purple600 } from '@material-ui/core/colors'

import { ColorsList } from 'components/colorpicker'
import { withTheme } from '@material-ui/core/styles'

class ThemeContainer extends Component {
  handleChangeTheme = () => {
    const colors = [indigo500, pink400, purple600]

    // get random color
    const color = colors[Math.floor(Math.random() * colors.length)]

    this.props.changeCurrentTheme({
      palette: {
        primary1Color: color,
      },
    })
  }

  onColorChosen = color => {
    this.props.changeCurrentTheme({
      palette: {
        primary1Color: color,
      },
    })
  }

  render() {
    const { theme } = this.props

    return (
      <div>
        <h2>Current theme</h2>

        <ThemeView theme={theme} />

        <Button label="test change theme" onClick={this.handleChangeTheme} />

        <ColorsList
          onColorChosen={this.onColorChosen}
          defaultSelection={theme.palette.primary.main}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default compose(
  withTheme(),
  connect(
    mapStateToProps,
    {
      // changeCurrentTheme,
    }
  )
)(ThemeContainer)
