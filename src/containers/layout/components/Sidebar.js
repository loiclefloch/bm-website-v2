import React from 'react'
import PropType from 'prop-types'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import themeable from '../../../modules/theme/themeable'

import { Link, RoutingEnum } from '../../../components/router'

class Sidebar extends React.Component {

  render() {
    return (
        <Drawer
          open={true}
        >
          <div
            style={{
              borderBottom: '1px solid #e0e0e0',
              boxSizing: 'border-box',
              display: 'block',
              height: this.props.theme.appBar.height,
              padding: '16px 0 11px 24px',
              position: 'relative',
            }}
          >
            Bookmark Manager
          </div>

          <div
            style={{
              paddingTop: '50px',
            }}
          >
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

            <Link
              to={Link.Route.TESTS}
            >
              <MenuItem>
                Tests
              </MenuItem>
            </Link>
          </div>
        </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  me: PropType.object
}

export default themeable()(Sidebar)
