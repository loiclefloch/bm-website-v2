import React from 'react'

import { connect, compose } from 'reacticoon/view'

import { postBook, getPostBookError, isFetchingPostBook } from 'modules/bookNew'

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

import ButtonLink from 'components/ButtonLink'
import ApiErrorBlock from 'components/error/ApiErrorBlock'
import LoadingBlock from 'components/loading/LoadingBlock'

import BookForm from 'modules/bookForm'
import { withForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  btnArea: {
    marginTop: theme.spacing.unit * 6,
  },
  btn: {
    minWidth: '200px',
    margin: theme.spacing.unit,
  },
})

class AddBookForm extends React.Component {
  constructor(props) {
    super(props)

    props.resetFormWithDefaultData()
  }

  handleSubmit = () => {
    const circleId = this.props.circleId
    const book = this.props.formData

    this.props.postBook(circleId, book)
  }

  render() {
    const { formData, formErrors, isValid, classes, onChange } = this.props

    const { name, description } = formData

    return (
      <form className="u-flexColumn u-justifyContentCenter u-marginTop50 u-flexCenter">
        <ApiErrorBlock apiError={this.props.postBookError} />

        <LoadingBlock show={this.props.isFetchingPostBook}>
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
            <InputLabel htmlFor="notes">Description</InputLabel>
            <TextField
              id="description"
              className="u-minWidth360"
              multiline
              rows="4"
              value={description}
              onChange={event => onChange('description', event.target.value)}
            />
          </FormControl>

          <div className={classes.btnArea}>
            <ButtonLink
              to={ButtonLink.getRoute('CIRCLE')}
              params={{
                circleId: this.props.circleId,
              }}
              className={classes.btn}
            >
              Cancel
            </ButtonLink>

            <Button
              color="primary"
              variant="raised"
              disabled={!isValid}
              onClick={this.handleSubmit}
              className={classes.btn}
            >
              Submit
            </Button>
          </div>
        </LoadingBlock>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    postBookError: getPostBookError(state),
    isFetchingPostBook: isFetchingPostBook(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    postBook,
  }),

  withForm(BookForm)
)(AddBookForm)
