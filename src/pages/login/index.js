import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { compose, connect } from 'reacticoon/view'
import { withForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'

import LoginForm from 'modules/auth/form'
import { login } from 'modules/auth'

import LoginFormView from './components/LoginForm'
import Page from 'components/Page'

class LoginPage extends Component {
  static propTypes = {
    userCredentials: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }).isRequired,
    login: PropTypes.func.isRequired,
  }

  onLogin = () => {
    const { formData } = this.props
    this.props.login(formData.username, formData.password)
  }

  render() {
    const { route, formData, formErrors, onChange, isPending } = this.props

    return (
      <Page title="Login" route={route} isFullPage isContentFull darkMode>
        <div
          style={{
            background:
              'url("https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoginFormView
            onLogin={this.onLogin}
            isPending={isPending}
            formData={formData}
            formErrors={formErrors}
            onChange={onChange}
          />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    // TODO: selector
    isPending: state.oauth.get('isPending'),
  }
}

export default compose(
  withForm(LoginForm),
  connect(mapStateToProps, {
    login,
  })
)(LoginPage)
