import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  showAddBookmarkDialog
} from '../../../modules/bookmark'

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import themeable from '../../../modules/theme/themeable'

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
    className="u-flexCenter u-sizeFullHeight"
  >
    <FlatButton
      label="Add bookmark"
      onClick={showAddBookmarkDialog}
      className="u-marginRight20"
      style={{
          color: 'white',
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
    const { isLoggedIn } = this.props
    return (
      <header
        style={{
          position: 'fixed',
          paddingLeft: this.props.theme.sidebar.width,
          height: this.props.theme.header.height,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
        }}
      >
        <AppBar
          title={document.title}
          iconElementRight={isLoggedIn ? <Logged  {...this.props} /> : <Login />}
          iconStyleRight={{
            // remove default style
            marginTop: 0,
            marginRight: '10px',
          }}
          iconStyleLeft={{
            // remove default style
            marginTop: 0,
          }}
          style={{
            height: '100%',
          }}
          titleStyle={{
            height: '100%',
            lineHeight: this.props.theme.header.height,
          }}
        />
      </header>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default themeable()(connect(mapStateToProps, {
  showAddBookmarkDialog,
})(Header))
