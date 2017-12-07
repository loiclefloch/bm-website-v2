import React, { Component } from 'react'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeProvider from '../../modules/theme/ThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import DialogRenderer from './components/DialogRenderer'

import { getTheme } from '../../modules/theme'

import {
  fetchMe,

  isFetchingMe,
  isLoggedIn,
  getMe,
} from '../../modules/user'

import {
  fetchMeTags
} from '../../modules/tag'

import LoadingPage from '../../components/loading/LoadingPage'

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
      children,
    } = this.props

    if (isFetchingMe) {
      return (
        <LoadingPage
          show
          message={loadingMessage}
        />
      )
    }

    const containerStyle = {
      maxWidth: '1160px',
      margin: '0 auto',
      paddingTop: '85px',
      minHeight: '100%',
      height: '100%',
    }

    if (!isFullPage) {
      containerStyle.paddingLeft = '256px' // TODO: theme sidebar width
    }

    return (
      <div id="layout">
        {!isFullPage &&
          <Header
            title={title}
            isLoggedIn={isLoggedIn}
            me={me}
          />
        }

        {!isFullPage &&
          <Sidebar
            isLoggedIn={isLoggedIn}
            me={me}
          />
        }

        <div style={containerStyle}>
          {isFetching ?
            <LoadingPage
              show
              message={loadingMessage}
            />
          : (
            children
          )}
        </div>

        {!isFullPage &&
          <Footer
          />
        }

        <DialogRenderer
        />
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    theme: getTheme(state),
    isFetchingMe: isFetchingMe(state),
    isLoggedIn: isLoggedIn(state),
    me: getMe(state),
  }
}

export default connect(mapStateToProps, {
  fetchMe,
  fetchMeTags,
})(Page)
