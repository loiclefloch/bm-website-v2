import React from "react";
import PropType from "prop-types";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import themeable from "../../../modules/theme/themeable";

import LogoIcon from "../../../components/Logo";

import { Link, RoutingEnum } from "../../../components/router";

const Item = ({ children }) => (
  <MenuItem
    style={{
      color: "white"
    }}
  >
    {children}
  </MenuItem>
);

class Sidebar extends React.Component {
  render() {
    return (
      <Drawer
        open={true}
        containerStyle={{ backgroundColor: this.props.theme.sidebar.color }}
      >
        <div
          style={{
            boxSizing: "border-box",
            color: "white",
            display: "block",
            height: this.props.theme.appBar.height,
            padding: "16px 0 11px 24px",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LogoIcon width={48} height={48} fill="white" />
            <div style={{ marginLeft: 12 }}>Bookmark Manager</div>
          </div>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <Link to={Link.Route.DASHBOARD}>
            <Item>Home</Item>
          </Link>

          <Link to={Link.Route.CIRCLES}>
            <Item>Circles</Item>
          </Link>

          <Link to={Link.Route.BOOKS}>
            <Item>Books</Item>
          </Link>

          <Link to={Link.Route.SETTINGS}>
            <Item>Settings</Item>
          </Link>

          <Link to={Link.Route.TESTS}>
            <Item>Tests</Item>
          </Link>
        </div>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  me: PropType.object
};

export default themeable()(Sidebar);
