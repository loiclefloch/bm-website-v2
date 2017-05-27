import React, { Component } from 'react';

import ui from 'redux-ui'
import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux'

import { postBookmark, getAddBookmarkError } from '../../../modules/bookmark'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

@ui({
  key: 'AddBookingForm',
  persist: false,
  state: {
    bookmark: {
      url: 'https://material.io/icons/',
      name: '',
      notes: '',
    },
  },
})
class AddBookmarkForm extends Component {

  isValid() {
    const { bookmark: { url, name, notes } } = this.props.ui

    return !isEmpty(url)
  }

  handleSubmit = () => {
    const bookmark = this.props.ui.bookmark

    if (this.isValid()) {
      this.props.postBookmark(bookmark)
    }
  }

  handleUrlChange = (event, url) => {
    const bookmark = { ...this.props.ui.bookmark, url }
    this.props.updateUI({ bookmark })
  }

  handleNameChange = (event, name) => {
    const bookmark = { ...this.props.ui.bookmark, name }
    this.props.updateUI({ bookmark })
  }

  handleNotesChange = (event, notes) => {
    const bookmark = { ...this.props.ui.bookmark, notes }
    this.props.updateUI({ bookmark })
  }

  render() {
    const { bookmark: { url, name, notes } } = this.props.ui

    return (
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '20px',
        }}
      >
        <div>
          {this.props.addBookmarkError}
        </div>

        <TextField
          floatingLabelText="url"
          value={url}
          onChange={this.handleUrlChange}
        />

        <TextField
          floatingLabelText="name"
          value={name}
          onChange={this.handleNameChange}
        />

        <TextField
          floatingLabelText="notes"
          multiLine={true}
          rows={4}
          value={notes}
          onChange={this.handleNotesChange}
        />

        <RaisedButton
          label="Submit"
          primary={true}
          disabled={!this.isValid()}
          onClick={this.handleSubmit}
          style={{
            marginTop: '50px',
            minWidth: '200px',
          }}
        />

      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    addBookmarkError: getAddBookmarkError(),
  }
}

export default connect(mapStateToProps, {
  postBookmark
})(AddBookmarkForm)
