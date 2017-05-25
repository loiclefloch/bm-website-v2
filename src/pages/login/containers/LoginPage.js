import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../../../modules/auth'
import LoginForm from '../components/LoginForm'

class LoginPage extends Component {
  static propTypes = {
    userCredentials: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }).isRequired,
    login: PropTypes.func.isRequired,
  }

  onLogin = () => {
    this.props.login('test@test.fr', 'bonjour1')
  }

  render() {
    const { userCredentials, isFetching } = this.props;

    return (
      <div>
        <LoginForm
          userCredentials={userCredentials}
          onLogin={this.onLogin}
          isFetching={isFetching}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userCredentials: {
      username: '',
      password: '',
    },
    isFetching: state.entities.oauth.get('isFetching')
  }
}

export default connect(mapStateToProps, {
  login,
})(LoginPage)
