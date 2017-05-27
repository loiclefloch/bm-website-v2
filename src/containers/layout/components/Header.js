import React, { Component } from 'react'

import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import {
  showAddBookmarkDialog
} from '../../../modules/bookmark'

import { AvatarWithDefault } from '../../../components/avatar'

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        label="Login"
      />
    );
  }
}

//
//
//

const Logged = ({ me, showAddBookmarkDialog }) => (
  <div
    style={{
      display: 'flex',
      alignContent: 'center',
      paddingTop: '4px',
    }}
  >
    <FlatButton
      label="Add bookmark"
      onClick={showAddBookmarkDialog}
      style={{
          color: 'white',
          marginRight: '20px',
      }}
    />

    {/* MENU */}
    <IconMenu
      className="pointer"
      iconButtonElement={
        <AvatarWithDefault
          src={me.avatar}
          placeholder={me.username}
        />
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      {/* TODO */}
      <MenuItem primaryText="Sign out" />

    </IconMenu>
  </div>
)
Logged.muiName = 'IconMenu'

//
//
//

/**
*
*/
class Header extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <header>
        <AppBar
          title="Bookmark Manager"
          iconElementRight={isLoggedIn ? <Logged  {...this.props} /> : <Login />}
        />
      </header>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {
  showAddBookmarkDialog,
})(Header)
