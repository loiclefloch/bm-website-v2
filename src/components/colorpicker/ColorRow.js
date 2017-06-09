import React, { Component } from 'react'

import PropTypes from 'prop-types'
import ColorsUtils from '../../utils/ColorsUtils'
import SelectedView from '../../components/icon/SelectedView'

export default class ColorRow extends Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
    onClicked: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  onColorClicked = () => {
    this.props.onClicked(this.props.color)
  }

  render() {
    return (
      <span
        className="pointer u-height40 u-width40 u-marginRight5 u-marginLeft5 u-marginTop5 u-inlineBlock u-textAlignCenter u-relative"
        onClick={this.onColorClicked}
        style={{
          lineHeight: '40px',
          background: this.props.color,
        }}
      >
        <SelectedView
          show={this.props.isSelected}
          isLightColor={ColorsUtils.isLightColor(this.props.color)}
        />
      </span>
    )

  }

}
