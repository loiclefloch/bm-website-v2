import React, {Component} from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

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

const Logged = ({ me }) => (
  <div>
    {/* MENU */}
    <IconMenu
      className="cursor"
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
);
Logged.muiName = 'IconMenu';

//
//
//

/**
* By default, the left icon is a navigation-menu.
*/
const Header = ({ isLoggedIn, me }) => (
  <header>
    <AppBar
      title="Bookmark Manager"
      iconElementRight={isLoggedIn ? <Logged me={me} /> : <Login />}
    />
  </header>
);

export default Header;
