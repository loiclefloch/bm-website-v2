import React from 'react'

import { connect, compose } from '../../../modules/reacticoon/view'

import { postBookmark, getAddBookmarkError, isAddBookmarkFetching } from '../../../modules/bookmark'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import ApiErrorBlock from '../../../components/error/ApiErrorBlock'
import LoadingBlock from '../../../components/loading/LoadingBlock'

import BookmarkForm from '../../../modules/bookmarkForm'
import { withForm } from '../../../plugins/reacticoon-form'

class AddBookmarkForm extends React.Component {
  handleSubmit = () => {
    const bookmark = this.props.formData

    this.props.postBookmark(bookmark)
  }

  render() {
    const { formData, formErrors, isValid, onChange } = this.props

    const { url, name, notes } = formData

    return (
      <form className="u-flexColumn u-justifyContentCenter u-marginTop20 u-flexCenter">
        <ApiErrorBlock apiError={this.props.addBookmarkError} />

        <LoadingBlock show={this.props.isAddBookmarkFetching} />

        <TextField
          floatingLabelText="url"
          className="u-minWidth360"
          value={url}
          onChange={event => onChange('url', event.target.value)}
        />

        <TextField
          floatingLabelText="name"
          className="u-minWidth360"
          value={name}
          onChange={event => onChange('name', event.target.value)}
        />

        <TextField
          floatingLabelText="notes"
          className="u-minWidth360"
          multiLine={true}
          rows={4}
          value={notes}
          onChange={event => onChange('notes', event.target.value)}
        />

        <RaisedButton
          label="Submit"
          primary={true}
          disabled={!isValid}
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
    addBookmarkError: getAddBookmarkError(state),
    isAddBookmarkFetching: isAddBookmarkFetching(state),
  }
}

export default compose(
  withForm(BookmarkForm),
  connect(mapStateToProps, {
    postBookmark,
  })
)(AddBookmarkForm)
