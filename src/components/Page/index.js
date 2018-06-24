import React, { Component } from 'react'

import { compose, connect } from 'reacticoon/view'
import { withTheme, withStyles } from '@material-ui/core/styles'

import classNames from 'classnames'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import { fetchMe, isFetchingMe, isLoggedIn, getMe } from '../../modules/user'

import { fetchMeTags } from '../../modules/tag'

import LoadingPage from '../../components/loading/LoadingPage'

const styles = theme => ({
  layout: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: theme.app.header.height,
    overflowY: 'auto',
  },
  container: {
    maxWidth: 1160,
    minWidth: 800,
    margin: '0 auto',
    minHeight: '100%',
    height: '100%',
    flexGrow: 1,
  },
  darkMode: {
    backgroundColor: theme.app.background.dark,
  },
})

class Page extends Component {
  componentDidMount() {
    this.props.fetchMe()
    this.props.fetchMeTags()
  }

  render() {
    const {
      isFetchingMe,
      isLoggedIn,
      isFetching,
      isFullPage,
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
      <div
        id="layout"
        className={classNames(classes.layout, {
          [classes.darkMode]: darkMode,
        })}
      >
        {!isFullPage && (
          <Header title={title} isLoggedIn={isLoggedIn} me={me} darkMode={darkMode} />
        )}

        {!isFullPage && <Sidebar isLoggedIn={isLoggedIn} me={me} />}

        <div className={classes.container}>
          {isFetching ? <LoadingPage show message={loadingMessage} /> : children}
        </div>

        {/* {!isFullPage && <Footer />} */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingMe: isFetchingMe(state),
    isLoggedIn: isLoggedIn(state),
    me: getMe(state),
  }
}

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
