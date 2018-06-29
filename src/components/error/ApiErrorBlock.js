import React from 'react';
import PropTypes from 'prop-types'
import ui from 'redux-ui'

import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'

import Snackbar from '@material-ui/core/Snackbar'

@ui({
  persist: false,
  state: {
    open: false,
  },
})
class ApiErrorBlock extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { apiError, updateUI } = this.props;

    // an api error is received, we display the api error.
    if (isNil(apiError) && !isNil(nextProps.apiError)) {
      updateUI({
        open: true
      })
    }
  }

  handleClose = () => {
    this.props.updateUI({
      open: false,
    })
  }
  render() {
    const { apiError, ui } = this.props;
    if (isNil(apiError)) {
      return (null)
    }

    let message = isEmpty(apiError.localizedMessage) ?
      `[${apiError.code}] ${apiError.message}`
      : apiError.localizedMessage

    return (
      <Snackbar
        open={ui.open}
        message={message}
        autoHideDuration={4000}
        onClose={this.handleClose}
      />
    )
  }
}

ApiErrorBlock.propTypes = {
  apiError: PropTypes.object,
}


export default ApiErrorBlock
