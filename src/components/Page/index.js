import React from 'react'
import PropTypes from 'prop-types'

import { compose, connect } from 'reacticoon/view'
import { fetchMe, isFetchingMe, isLoggedIn, getMe } from '../../modules/user'
import { fetchMeTags } from '../../modules/tag'

import classNames from 'classnames'
import { withStyles, withTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FlashMessagesContainer from 'app/reacticoon-plugins/reacticoon-flash-messages/src/container'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import LoadingPage from '../../components/loading/LoadingPage'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: theme.app.header.height,
  },
  appBar: {
    height: theme.app.header.height,
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${theme.app.sidebar.width}px)`,
    // },
    background: theme.app.background.dark,

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.app.sidebar.width,
    width: `calc(100% - ${theme.app.sidebar.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.app.sidebar.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: theme.app.background.dark,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  appBarSpacerContentFull: {
    minHeight: theme.app.header.height,
    height: theme.app.header.height,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: theme.spacing.unit * 3,
  },
  contentFull: {
    padding: 0,
  },
})

class Page extends React.Component {
  state = {
    open: true,
  }

  componentDidMount() {
    this.props.fetchMe()
    this.props.fetchMeTags()
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      isFetchingMe,
      isLoggedIn,
      isFetching,
      isFullPage,
      // remove padding on content
      isContentFull = false,
      loadingMessage,
      me,
      title,
      classes,
      children,
      darkMode = false,
    } = this.props

    if (isFetchingMe) {
      return <LoadingPage show message={loadingMessage} />
    }

    return (
      <div className={classes.root}>
        <CssBaseline />

        {!isFullPage && (
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <Header
                title={title}
                isLoggedIn={isLoggedIn}
                me={me}
                darkMode={darkMode}
                handleDrawerOpen={this.handleDrawerOpen}
                sidebarIsOpen={this.state.open}
              />
            </Toolbar>
          </AppBar>
        )}

        {!isFullPage && (
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <Sidebar handleDrawerClose={this.handleDrawerClose} isLoggedIn={isLoggedIn} me={me} />
          </Drawer>
        )}

        <main className={classNames(classes.content, { [classes.contentFull]: isContentFull })}>
          {!isFullPage && (
            <div
              className={classNames(classes.appBarSpacer, {
                [classes.appBarSpacerContentFull]: isContentFull,
              })}
            />
          )}

          <FlashMessagesContainer>
            {({ flashMessages }) =>
              flashMessages.map(flashMessage => <div>{flashMessage.text}</div>)
            }
          </FlashMessagesContainer>

          {isFetching ? <LoadingPage show message={loadingMessage} /> : children}
        </main>
      </div>
    )
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  isFetchingMe: isFetchingMe(state),
  isLoggedIn: isLoggedIn(state),
  me: getMe(state),
})

export default compose(
  withStyles(styles),
  withTheme(),
  connect(
    mapStateToProps,
    {
      fetchMe,
      fetchMeTags,
    }
  )
)(Page)
