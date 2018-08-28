import React from 'react'
import PropType from 'prop-types'

import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import { withStyles } from '@material-ui/core/styles'

import LogoIcon from 'components/Logo'

import Link from 'reacticoon/routing/Link'
import Typography from '@material-ui/core/Typography'

const Item = ({ route, classes, text }) => (
  <Link to={Link.getRoute(route)}>
    <MenuItem classes={{ root: classes.menuItem }}>
      <span className={classes.menuItemText}>{text}</span>
    </MenuItem>
  </Link>
)

const styles = theme => ({
  drawerPaper: {
    backgroundColor: theme.app.background.dark,
    width: theme.app.sidebar.width,
  },
  leftArea: {
    boxSizing: 'border-box',
    display: 'block',
    height: theme.app.header.height,
    padding: '4px 0 16px 16px',
    position: 'relative',
    color: theme.palette.common.white,
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    marginLeft: 12,
    color: theme.palette.common.white,
    fontSize: '1rem',
  },
  menuList: {
    paddingTop: 50,
  },
  menuItem: {
    paddingLeft: theme.spacing.unit * 4,
    color: theme.palette.common.white,
    ...theme.style.focusPrimary,
  },
  menuItemText: {
    // required for menuItem focus
  },
})

const Sidebar = ({ classes }) => (
  <Drawer variant="permanent" open={true} classes={{ paper: classes.drawerPaper }}>
    <div className={classes.leftArea}>
      <div className={classes.logoArea}>
        <LogoIcon width={48} height={48} fill="white" />
        <Typography className={classes.brand} variant="headline">
          Bookmark Manager
        </Typography>
      </div>
    </div>

    <MenuList className={classes.menuList}>
      <Item route="DASHBOARD" classes={classes} text="Home" />
      <Item route="CIRCLES" classes={classes} text="Circles" />
      <Item route="SETTINGS" classes={classes} text="Settings" />
      <Item route="TESTS" classes={classes} text="Tests" />

      {/* <Link to={Link.getRoute('BOOKS')}>
        <Item classes={classes}>Books</Item>
      </Link>*/}
    </MenuList>
  </Drawer>
)

Sidebar.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  me: PropType.object,
}

export default withStyles(styles)(Sidebar)
