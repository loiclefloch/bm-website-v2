import React from 'react'

import { connect, compose } from 'reacticoon/view'

import { postCircle, getPostCircleError, isFetchingPostCircle } from 'modules/circleNew'

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

import ApiErrorBlock from 'components/error/ApiErrorBlock'
import LoadingBlock from 'components/loading/LoadingBlock'

import CircleForm from 'modules/circleForm'
import { withForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
})

class AddCircleForm extends React.Component {
  constructor(props) {
    super(props)

    props.resetFormWithDefaultData()
  }

  handleSubmit = () => {
    const circle = this.props.formData

    this.props.postCircle(circle)
  }

  render() {
    const { formData, formErrors, isValid, classes, onChange } = this.props

    const { name, description } = formData

    return (
      <form className="u-flexColumn u-justifyContentCenter u-marginTop50 u-flexCenter">
        <ApiErrorBlock apiError={this.props.postCircleError} />

        <LoadingBlock show={this.props.isFetchingPostCircle}>
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
    postCircleError: getPostCircleError(state),
    isFetchingPostCircle: isFetchingPostCircle(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    postCircle,
  }),

  withForm(CircleForm)
)(AddCircleForm)
