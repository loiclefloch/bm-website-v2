import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

// import { showAddBookmarkDialog } from "../../../modules/bookmark";

import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'reacticoon/routing'


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: theme.app.header.height,
    position: 'relative',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    height: theme.app.header.height,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.app.sidebar.width}px)`,
    },
    marginLeft: theme.app.sidebar.width,
    background: theme.app.background.dark,
    position: 'fixed',
  },
  toolbarRoot: {
    minHeight: theme.app.header.height,
  },
  title: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  btn: {
    color: 'white',
    ...theme.style.focusPrimary,
  },
})


const Login = () => <Button label="Login" />

//
//
//

const Logged = ({ me, classes }) => (
  <div className="u-flexCenter u-sizeFullHeight">
    <Button component={Link} to={Link.getRoute('NEW_BOOKMARK')} className={classes.btn}>
      Add bookmark
    </Button>

    {/* MENU */}
    <IconButton
      //aria-owns={open ? 'menu-appbar' : null}
      aria-haspopup="true"
      //onClick={this.handleMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </div>
)

//
//
//

/**
 *
 */
const Header = ({ isLoggedIn, title, classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar classes={{ root: classes.toolbarRoot }}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="title" color="inherit" className={classes.title}>
          {title}
        </Typography>

        {isLoggedIn ? <Logged {...this.props} classes={classes} /> : <Login />}
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(Header)
