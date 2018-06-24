import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ui from 'redux-ui'

import AddIcon from '@material-ui/icons/Add'
import ChooseTagDialog from './ChooseTagDialog'

@ui({
  persist: false,
  state: {
    openTagSelector: false,
  },
})
class AddTagBtn extends Component {

  handleOpenTagSelector = () => {
    this.props.updateUI({ openTagSelector: true })
  }

  handleCloseTagSelector = () => {
    this.props.updateUI({ openTagSelector: false })
  }

  handeSaveTags = (selectedTags) => {
    this.handleCloseTagSelector()
  }

  render() {
    const { style, className } = this.props
    return (
      <div
        className={`u-inlineBlock u-cursorPointer u-paddingLeft5 ${className}`}
        style={style}
        onClick={this.handleOpenTagSelector}
      >
        <AddIcon
        />

        {this.props.ui.openTagSelector &&
          <ChooseTagDialog
            open
            bookmark={this.props.bookmark}
            selectedTags={this.props.selectedTags}
            onClose={this.handleCloseTagSelector}
            onSave={this.handeSaveTags}
          />
        }
      </div>
    )
  }
}

AddTagBtn.propTypes = {
  bookmark: PropTypes.object.isRequired,
  tags: PropTypes.array,
  selectedTags: PropTypes.array,
  style: PropTypes.object,
  className: PropTypes.object,
}

export default AddTagBtn
