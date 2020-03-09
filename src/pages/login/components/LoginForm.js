import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import LogoIcon from 'components/Logo'

import LoadingBlock from 'components/loading/LoadingBlock'
import { HibpPasswordRangeContainer } from 'reacticoon-plugins/reacticoon-plugin-hibp/src'
import BlockError from 'components/BlockError'

const LoginForm = ({ formData, onChange, isPending, onLogin }) => {
  const { username, password } = formData

  const fieldProps = {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'false',
    style: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px',
    },
  }

  return (
    <form
      className="Login"
      name="LoginForm"
      style={{
        textAlign: 'center',
      }}
    >
      <Paper
        elevation={2}
        style={{
          maxWidth: '600px',
          width: '380px',
          margin: '4em auto',
          padding: '3em 2em 2em 2em',

          // LoadingBlock parent requirements
          position: 'relative',
        }}
      >
        <LoadingBlock show={isPending}>
          <React.Fragment>
            <LogoIcon width={48} height={48} fill="#2F2F2F" />

            <TextField
              autoComplete="email"
              label="Login"
              name="login"
              value={username}
              onChange={event =>
                onChange({
                  ...formData,
                  username: event.target.value,
                })
              }
              {...fieldProps}
            />

            <HibpPasswordRangeContainer password={password}>
              {({ isPwned, count }) => (
                <React.Fragment>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={event =>
                      onChange({
                        ...formData,
                        password: event.target.value,
                      })
                    }
                    {...fieldProps}
                  />
                  {isPwned && (
                    <BlockError>
                      Oh no — pwned! This password has been seen {count} times before. This password
                      has previously appeared in a data breach and should never be used. If you've
                      ever used it anywhere before, change it!
                    </BlockError>
                  )}
                </React.Fragment>
              )}
            </HibpPasswordRangeContainer>

            <br />

            <Button
              name="submitLoginForm"
              type="submit"
              color="primary"
              variant="raised"
              style={{
                margin: '16px 0px 16px',
                width: '200px',
              }}
              onClick={onLogin}
            >
              Login
            </Button>
          </React.Fragment>
        </LoadingBlock>
      </Paper>
    </form>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userCredentials: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
}

export default LoginForm
