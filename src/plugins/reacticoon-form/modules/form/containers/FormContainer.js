import React from 'react'
import PropTypes from 'prop-types'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'
import isFunction from 'lodash/isFunction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getFormCustomActions } from '../config'

import { initForm, updateForm, resetForm } from '../actions'

import { makeGetFormData, makeGetFormErrors, makeGetFormOptions } from '../selectors'

class FormContainer extends React.Component {
  componentWillMount() {
    if (!isNull(this.props.defaultData)) {
      this.props.initForm(this.props.formType, {
        ...this.props.formData, // default data defined on the form creation
        ...this.props.defaultData, // given default data from props
      })
    }
  }

  handleChange = (key, formDataParam) => {
    let formData
    if (isUndefined(formDataParam)) {
      // here key is the formData
      // ex: onChange({ ...formData, title: event.target.value })
      formData = key
    } else {
      // the user has pass a key
      // ex: onChange('title', event.target.value)
      formData = { ...this.props.formData, [key]: formDataParam }
    }

    this.props.updateForm(this.props.formType, formData)
  }

  handleReset = () => {
    this.props.resetForm(this.props.formType, this.props.defaultData)
  }

  render() {
    const {
      formData,
      formErrors,
      formOptions,
      WrappedComponent,
      children,
      ...otherProps
    } = this.props

    const propsToPass = {
      formData,
      formErrors,
      formOptions,
      formIsValid: formErrors.isValid,
      // TODO deprecated, use formIsValid
      isValid: formErrors.isValid,
      onChange: this.handleChange,
      onReset: this.handleReset,
      ...otherProps,
    }

    if (isFunction(children)) {
      return children(propsToPass)
    }

    return <WrappedComponent {...propsToPass} />
  }
}

FormContainer.defaultProps = {
  defaultData: null,
}

FormContainer.propTypes = {
  formType: PropTypes.string.isRequired,

  /**
   * Default data to use on form mounting
   */
  defaultData: PropTypes.object,
}

const makeMapStateToProps = () => {
  const getFormData = makeGetFormData()
  const getFormErrors = makeGetFormErrors()
  const getFormOptions = makeGetFormOptions()

  const mapStateToProps = (state, props) => {
    return {
      formData: getFormData(state, props),
      formErrors: getFormErrors(state, props),
      formOptions: getFormOptions(state, props),
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formCustomActions = getFormCustomActions(ownProps.formType)

  return {
    initForm: bindActionCreators(initForm, dispatch),
    updateForm: bindActionCreators(updateForm, dispatch),
    resetForm: bindActionCreators(resetForm, dispatch),
    customActions: bindActionCreators(formCustomActions, dispatch),
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(FormContainer)
