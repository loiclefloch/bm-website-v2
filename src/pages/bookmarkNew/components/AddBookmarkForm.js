import React from 'react'

import { connect, compose } from 'reacticoon/view'

import { postBookmark, getAddBookmarkError, isAddBookmarkFetching } from 'modules/bookmark'

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

import ApiErrorBlock from 'components/error/ApiErrorBlock'
import LoadingBlock from 'components/loading/LoadingBlock'

import BookmarkForm from 'modules/bookmarkForm'
import { withForm } from 'reacticoon-plugins/reacticoon-form/src'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
})

class AddBookmarkForm extends React.Component {
  constructor(props) {
    super(props)

    props.resetFormWithDefaultData()
  }

  handleSubmit = () => {
    const bookmark = this.props.formData

    this.props.postBookmark(bookmark)
  }

  render() {
    const { formData, formErrors, isValid, classes, onChange } = this.props

    const { url, name, notes } = formData

    return (
      <form className="u-flexColumn u-justifyContentCenter u-marginTop50 u-flexCenter">
        <ApiErrorBlock apiError={this.props.addBookmarkError} />

        <LoadingBlock show={this.props.isAddBookmarkFetching}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="url">Url</InputLabel>
            <TextField
              id="url"
              className="u-minWidth360"
              value={url}
              onChange={event => onChange('url', event.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              id="name"
              className="u-minWidth360"
              value={name}
              onChange={event => onChange('name', event.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="notes">Notes</InputLabel>
            <TextField
              id="notes"
              className="u-minWidth360"
              multiline
              rows="4"
              value={notes}
              onChange={event => onChange('notes', event.target.value)}
            />
          </FormControl>

          <Button
            color="primary"
            variant="raised"
            disabled={!isValid}
            onClick={this.handleSubmit}
            style={{
              marginTop: '50px',
              minWidth: '200px',
            }}
          >
            Submit
          </Button>
        </LoadingBlock>
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
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      postBookmark,
    }
  ),

  withForm(BookmarkForm)
)(AddBookmarkForm)
