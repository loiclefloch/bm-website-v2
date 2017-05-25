import React from 'react'
import PropType from 'prop-types'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

import { Link, RoutingEnum } from '../../../components/router'

class Sidebar extends React.Component {

  render() {
    return (
      <div>
        <Drawer
          open={true}
        >
          <AppBar title="Bookmark manager" />

          <Link
            to={Link.Route.DASHBOARD}
          >
            <MenuItem>
              Home
            </MenuItem>
          </Link>

          <Link
            to={Link.Route.CIRCLES}
          >
            <MenuItem>
              Circles
            </MenuItem>
          </Link>

          <Link
            to={Link.Route.BOOKS}
          >
            <MenuItem>
              Books
            </MenuItem>
          </Link>

          <Link
            to={Link.Route.SETTINGS}
          >
            <MenuItem>
              Settings
            </MenuItem>
          </Link>
          </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  me: PropType.object
}

export default Sidebar
