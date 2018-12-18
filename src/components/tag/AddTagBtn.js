import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddIcon from '@material-ui/icons/Add'
import ChooseTagDialog from './ChooseTagDialog'

class AddTagBtn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openTagSelector: false,
    }
  }

  handleOpenTagSelector = () => {
    this.setState({ openTagSelector: true })
  }

  handleCloseTagSelector = () => {
    this.setState({ openTagSelector: false })
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

        {this.state.openTagSelector &&
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
