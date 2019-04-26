import React from 'react'
import PropType from 'prop-types'

import MenuList from '@material-ui/core/MenuList'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { withStyles } from '@material-ui/core/styles'

import LogoIcon from 'components/Logo'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'reacticoon/routing'
import Typography from '@material-ui/core/Typography'
import DashboardIcon from '@material-ui/icons/Dashboard'
import CirclesIcon from '@material-ui/icons/GroupWork'
import SettingsIcon from '@material-ui/icons/Settings'
import TestsIcon from '@material-ui/icons/Close'

const Item = ({ route, classes, text, icon }) => (
  <Link to={Link.getRoute(route)}>
    <ListItem classes={{ root: classes.menuItem }}>
      {icon && (
        <ListItemIcon>{React.cloneElement(icon, { className: classes.menuItemIcon })}</ListItemIcon>
      )}
      <ListItemText primary={text} classes={{ primary: classes.menuItemText }} />
    </ListItem>
  </Link>
)

const styles = theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    // ...theme.mixins.toolbar,
    minHeight: 48,
  },
  leftArea: {
    boxSizing: 'border-box',
    display: 'block',
    height: theme.app.header.height,
    position: 'relative',
    color: theme.palette.common.white,
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: theme.spacing.unit,
  },
  brand: {
    marginLeft: 12,
    color: theme.palette.common.white,
    fontSize: '1rem',
  },
  drawerIcon: {
    color: theme.palette.common.white,
  },
  menuList: {
    paddingTop: 50,
  },
  menuItem: {
    color: theme.palette.common.white,
    ...theme.style.focusPrimary,
  },
  menuItemText: {
    // required for menuItem focus
    color: theme.palette.common.white,
  },
  menuItemIcon: {
    color: theme.palette.common.white,
  },
})

const Sidebar = ({ classes, handleDrawerClose }) => (
  <React.Fragment>
    <div className={classes.leftArea}>
      <div className={classes.logoArea}>
        <LogoIcon width={48} height={48} fill="white" className={classes.logo} />
        <Typography className={classes.brand} variant="headline">
          Bookmark Manager
        </Typography>

        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.drawerIcon} />
          </IconButton>
        </div>
      </div>
    </div>

    <Divider />

    <MenuList className={classes.menuList}>
      <Item route="DASHBOARD" classes={classes} icon={<DashboardIcon />} text="Dashboard" />

      <Item route="CIRCLES" classes={classes} icon={<CirclesIcon />} text="Circles" />
      <Item route="SETTINGS" classes={classes} icon={<SettingsIcon />} text="Settings" />
      <Item route="TESTS" classes={classes} icon={<TestsIcon />} text="Tests" />

      {/* <Link to={Link.getRoute('BOOKS')}>
        <Item classes={classes}>Books</Item>
      </Link>*/}
    </MenuList>
  </React.Fragment>
)

Sidebar.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  me: PropType.object,
}

export default withStyles(styles)(Sidebar)
