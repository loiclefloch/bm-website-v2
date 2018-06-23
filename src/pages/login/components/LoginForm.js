import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import LoadingBlock from "../../../components/loading/LoadingBlock";

const LoginForm = ({ formData, onChange, isFetching, onLogin }) => {
  const { username, password } = formData;

  const fieldProps = {
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    style: {
      width: "100%",
      textAlign: "center",
      marginBottom: "20px"
    }
  };

  return (
    <div
      className="Login"
      style={{
        textAlign: "center"
      }}
    >
      <Typography variant="display1">Login</Typography>

      <Paper
        elevation={2}
        style={{
          maxWidth: "600px",
          width: "380px",
          margin: "4em auto",
          padding: "3em 2em 2em 2em",

          // LoadingBlock parent requirements
          position: "relative"
        }}
      >
        <LoadingBlock show={isFetching}>
          <React.Fragment>
            <TextField
              autoComplete="email"
              label="Login"
              value={username}
              onChange={event =>
                onChange({
                  ...formData,
                  username: event.target.value
                })
              }
              {...fieldProps}
            />

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={event =>
                onChange({
                  ...formData,
                  password: event.target.value
                })
              }
              {...fieldProps}
            />

            <br />

            <Button
              color="primary"
              style={{
                margin: ".3em 0 1em 0",
                width: "200px"
              }}
              onClick={onLogin}
            >
              Login
            </Button>
          </React.Fragment>
        </LoadingBlock>
      </Paper>
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userCredentials: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default LoginForm;
