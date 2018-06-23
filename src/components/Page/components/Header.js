import React, { Component } from "react";

import { connect } from "react-redux";

// import { showAddBookmarkDialog } from "../../../modules/bookmark";

import AppBar from "@material-ui/core/AppBar";
// import IconMenu from "@material-ui/icons/IconMenu";
// import MenuItem from "@material-ui/icons/MenuItem";
import Button from "@material-ui/core/Button";

import { AvatarWithDefault } from "../../../components/avatar";

class Login extends Component {
  render() {
    return <Button label="Login" />;
  }
}

//
//
//

const Logged = ({ me, showAddBookmarkDialog }) => (
  <div className="u-flexCenter u-sizeFullHeight">
    <Button
      label="Add bookmark"
      onClick={showAddBookmarkDialog}
      className="u-marginRight20"
      style={{
        color: "white"
      }}
    />

    {/* MENU */}
    {/* <IconMenu
      className="pointer"
      iconButtonElement={
        <AvatarWithDefault
          // src={process.env.PUBLIC_URL + "/img/logo.svg"}
          // src={me.avatar}
          placeholder={me.username}
        />
      }
      targetOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MenuItem primaryText="Sign out" />
    </IconMenu> */}
  </div>
);

//
//
//

/**
 *
 */
class Header extends Component {
  render() {
    const { isLoggedIn, title } = this.props;

    return (
      <header
        style={{
          position: "fixed",
          paddingLeft: 0,
          height: this.props.theme.header.height,
          opacity: 1,
          top: 0,
          left: this.props.theme.sidebar.leftOf,
          right: 0,
          zIndex: 200
        }}
      >
        <AppBar
          title={title}
          iconElementRight={isLoggedIn ? <Logged {...this.props} /> : <Login />}
          iconStyleRight={{
            // remove default style
            marginTop: 0,
            marginRight: "10px"
          }}
          iconStyleLeft={{
            // remove default style
            marginTop: 0
          }}
          style={{ height: "100%" }}
          titleStyle={{
            height: "100%",
            lineHeight: this.props.theme.header.height
          }}
        />
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    // showAddBookmarkDialog
  }
)(Header);
