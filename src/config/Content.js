import React, { Component } from 'react'

import { connect } from 'reacticoon/view'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import getTheme from 'modules/theme/getTheme'
import { isFetchingI18nPhrases } from 'reacticoon/i18n'

/**
 * The content of the app will have the `router` as children.
 * Use it to englobe the router with providers in order to not re-render those providers when the
 * route change
 *
 */
class Content extends Component {
  render() {
    const { isFetchingI18nPhrases, children } = this.props

    const theme = getTheme()

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          {isFetchingI18nPhrases
            ? // TODO: display loading
              null
            : children}
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingI18nPhrases: isFetchingI18nPhrases(state),
  }
}

export default connect(
  mapStateToProps,
  {}
)(Content)
