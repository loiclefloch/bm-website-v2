import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { colorsList } from 'modules/theme/constants'

import ColorRow from './ColorRow'

export default class ColorsList extends Component {

  static defaultProps = {
    colors: colorsList,
    defaultSelection: colorsList[0],
  }

  static propTypes = {
    defaultSelection: PropTypes.string.isRequired,
    onColorChosen: PropTypes.func.isRequired,
    colors: PropTypes.array,
  }

  render() {
    const colorListView = [];

    this.props.colors.forEach((color) => {
      const isSelected = color === this.props.defaultSelection;

      colorListView.push(
        <ColorRow
          color={color}
          isSelected={isSelected}
          onClicked={this.props.onColorChosen}
          key={color}
        />
      )
    })

    return (
      <div>
        {colorListView}
      </div>
    )
  }

}
