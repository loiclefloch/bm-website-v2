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
          style={{
            // display: 'inline-block',
            marginRight: '10px',
            float: 'right',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        className="pointer"
        onClick={this.onColorClicked}
        style={{
          lineHeight: '40px',
          height: '40px',
          width: '40px',
          marginRight: '5px',
          marginLeft: '5px',
          marginTop: '5px',
          overflow: 'hidden',
          background: this.props.color,
          display: 'inline-block',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {selectedView}
      </span>
    )

  }

}
