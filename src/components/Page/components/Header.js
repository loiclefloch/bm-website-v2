import React from 'react'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

// import { showAddBookmarkDialog } from "../../../modules/bookmark";

import LogoIcon from 'components/Logo'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'reacticoon/routing'

const styles = theme => ({
  title: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 24,
  },
  menuButtonHidden: {
    display: 'none',
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
const Header = ({ isLoggedIn, title, classes, sidebarIsOpen, handleDrawerOpen }) => (
  <React.Fragment>
    {!sidebarIsOpen && (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, sidebarIsOpen && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>

        <LogoIcon width={36} height={36} fill="white" />
      </React.Fragment>
    )}

    {/* <Typography variant="title" color="inherit" className={classes.title}>
      {title} 
    </Typography> */}

    {isLoggedIn ? <Logged {...this.props} classes={classes} /> : <Login />}
  </React.Fragment>
)

export default withStyles(styles)(Header)
