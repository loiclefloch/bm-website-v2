import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ui from 'redux-ui'

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
    this.props.onValidate(selectedTags)
  }

  render() {
    const { style, className } = this.props
    return (
      <span
        className={`${className} `}
        style={style}
        onClick={this.handleOpenTagSelector}
      >
        +
        <ChooseTagDialog
          open={this.props.ui.openTagSelector}
          tags={[{"id":431,"name":"chrome addon","color":"#95A5A6"},{"id":432,"name":"forensic","color":"#95A5A6"},{"id":433,"name":"startup","color":"#95A5A6"},{"id":434,"name":"blog","color":"#95A5A6"},{"id":435,"name":"Productivity","color":"#4ECDC4"},{"id":436,"name":"web","color":"#95A5A6"},{"id":437,"name":"Tools","color":"#95A5A6"},{"id":438,"name":"ios","color":"#95A5A6"},{"id":439,"name":"todo","color":"#D24D57"},{"id":429,"name":"dev","color":"#663399"},{"id":430,"name":"to read","color":"#95A5A6"},{"id":440,"name":"cli","color":"#95A5A6"},{"id":441,"name":"Fun","color":"#95A5A6"},{"id":442,"name":"epitech","color":"#1F3A93"},{"id":443,"name":"android","color":"#95A5A6"},{"id":444,"name":"Lifestyle","color":"#95A5A6"},{"id":445,"name":"tool","color":"#95A5A6"},{"id":446,"name":"tips","color":"#95A5A6"},{"id":447,"name":"git","color":"#95A5A6"},{"id":448,"name":"movies","color":"#95A5A6"},{"id":449,"name":"viper","color":"#95A5A6"},{"id":450,"name":"cross-platform","color":"#95A5A6"},{"id":451,"name":"angular2","color":"#95A5A6"},{"id":452,"name":"jekyll","color":"#95A5A6"},{"id":454,"name":"angular","color":"#95A5A6"},{"id":455,"name":"symfony2","color":"#95A5A6"},{"id":456,"name":"audio","color":"#95A5A6"},{"id":457,"name":"hack","color":"#95A5A6"},{"id":458,"name":"kernel","color":"#95A5A6"},{"id":459,"name":"readiing","color":"#95A5A6"},{"id":460,"name":"scrum","color":"#95A5A6"},{"id":461,"name":"doc","color":"#95A5A6"},{"id":462,"name":"pmt","color":"#95A5A6"},{"id":463,"name":"swift","color":"#95A5A6"},{"id":464,"name":"food","color":"#95A5A6"},{"id":465,"name":"php","color":"#95A5A6"},{"id":466,"name":"opensource","color":"#95A5A6"},{"id":467,"name":"lifehack","color":"#95A5A6"},{"id":468,"name":"music","color":"#95A5A6"},{"id":469,"name":"api","color":"#95A5A6"},{"id":470,"name":"project","color":"#95A5A6"},{"id":471,"name":"vim","color":"#95A5A6"},{"id":472,"name":"courses","color":"#95A5A6"},{"id":474,"name":"server","color":null},{"id":475,"name":"c++","color":null},{"id":476,"name":"test_new","color":"#D35400"},{"id":477,"name":"testimony","color":"#F27935"},{"id":478,"name":"machine learning","color":"#446CB3"},{"id":479,"name":"react-archi","color":"#3498DB"},{"id":480,"name":"javascript","color":"#FFB03B"},{"id":481,"name":"testdew","color":"#DB0A5B"}]}
            selectedTags={this.props.selectedTags}
            onClose={this.handleCloseTagSelector}
            onSave={this.handeSaveTags}
        />
      </span>
    )
  }
}

AddTagBtn.propTypes = {
  /**
   * @param tags
   * @type {Function}
   */
  onValidate: PropTypes.func.isRequired,
  tags: PropTypes.array,
  selectedTags: PropTypes.array,
  style: PropTypes.object,
  className: PropTypes.object,
}

export default AddTagBtn
