import React from 'react';
import PropTypes from 'prop-types'

import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'

import Snackbar from '@material-ui/core/Snackbar'

class ApiErrorBlock extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { apiError } = this.props;

    // an api error is received, we display the api error.
    if (isNil(apiError) && !isNil(nextProps.apiError)) {
      this.setState({
        open: true
      })
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }
  render() {
    const { apiError } = this.props;
    if (isNil(apiError)) {
      return (null)
    }

    let message = isEmpty(apiError.localizedMessage) ?
      `[${apiError.code}] ${apiError.message}`
      : apiError.localizedMessage

    return (
      <Snackbar
        open={this.state.open}
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
