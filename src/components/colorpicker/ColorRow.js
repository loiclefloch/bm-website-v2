import React, { Component } from 'react'

import PropTypes from 'prop-types'
import ColorsUtils from '../../utils/ColorsUtils'
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';

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
    let selectedView = (
      <span className="add_tag_color_list__row__not_selected" />
    )

    if (this.props.isSelected) {
      selectedView = (
        <span
          className="u-flexCenter u-justifyContentCenter u-sizeFull u-floatRight u-marginRight10"
          style={{
            margin: '0 auto',
          }}
        >
          <CheckCircleIcon
            style={{
              display: 'table-cell',
              margin: '0 auto',
              color: !ColorsUtils.isLightColor(this.props.color) ? 'white' : 'black',
            }}
          />
        </span>
      )
    }

    return (
      <span
        className="pointer u-height40 u-width40 u-marginRight5 u-marginLeft5 u-marginTop5 u-inlineBlock u-textAlignCenter u-relative"
        onClick={this.onColorClicked}
        style={{
          lineHeight: '40px',
          background: this.props.color,
        }}
      >
        {selectedView}
      </span>
    )

  }

}
