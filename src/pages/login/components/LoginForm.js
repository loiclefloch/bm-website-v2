import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import LoadingBlock from '../../../components/loading/LoadingBlock'

const LoginForm = ({ userCredentials, isFetching, onLogin }) => {
  const { username, password } = userCredentials

  const fieldProps = {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',
    style: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px'
    },
  }

  return (
    <div
      className="Login"
      style={{
        textAlign: 'center',
      }}
    >
      <h1>
        Login
      </h1>

      <Paper
        zDepth={2}
        style={{
          maxWidth: '600px',
          width: '380px',
          margin: '4em auto',
          padding: '3em 2em 2em 2em',

          // LoadingBlock parent requirements
          position: 'relative',
        }}
      >

        <LoadingBlock
          show={isFetching}
        />
        
        <TextField
          floatingLabelText="Login"
          {...fieldProps}
        />

        <TextField
          floatingLabelText="Password"
          type="password"
          {...fieldProps}
        />

        <br />

        <RaisedButton
          label="Login"
          primary={true}
          style={{
            margin: '.3em 0 1em 0',
            width: '200px',
          }}
          onClick={onLogin}
        />
      </Paper>

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
