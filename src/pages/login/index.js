import React, { Component } from "react";
import PropTypes from "prop-types";

import { compose, connect } from "reacticoon/view";
import { withForm } from "app/reacticoon-plugins/reacticoon-form/src";

import LoginForm from "modules/auth/form";
import { login } from "modules/auth";

import LoginFormView from "./components/LoginForm";
import Page from "components/Page";

class LoginPage extends Component {
  static propTypes = {
    userCredentials: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string
    }).isRequired,
    login: PropTypes.func.isRequired
  };

  onLogin = () => {
    const { formData } = this.props;
    this.props.login(formData.username, formData.password);
  };

  render() {
    const { formData, formErrors, onChange, isFetching } = this.props;

    return (
      <Page title="Login" isFullPage darkMode>
        <LoginFormView
          onLogin={this.onLogin}
          isFetching={isFetching}
          formData={formData}
          formErrors={formErrors}
          onChange={onChange}
        />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    // TODO: selector
    isFetching: state.entities.oauth.get("isFetching")
  };
};

export default compose(
  withForm(LoginForm),
  connect(
    mapStateToProps,
    {
      login
    }
  )
)(LoginPage);
