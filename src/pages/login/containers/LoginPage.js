import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../LoginActions'
import LoginForm from '../components/LoginForm'

import { loadBookmarks } from '../../dashboard/DashboardActions'
import DashboardPage from '../../dashboard/containers/DashboardPage'

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

  onLoadBookmarks = () => {
    this.props.loadBookmarks();
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

        <br />
        <br />

        <div
          onClick={this.onLoadBookmarks}
        >TEST BOOKMARKS</div>

        <DashboardPage
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
  loadBookmarks,
})(LoginPage)
