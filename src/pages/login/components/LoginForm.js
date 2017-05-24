import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField';

const LoginForm = ({ userCredentials, onLogin }) => {
  const { username, password } = userCredentials

  return (
    <div className="Login">
      <TextField
        hintText="login"
      />
      <br />
      <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password"
      />


      <br />
      <br />

      <div
        onClick={onLogin}
      >
        TEST LOGIN
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userCredentials: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired
}

export default LoginForm
