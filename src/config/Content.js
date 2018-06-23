import React, { Component } from 'react'

import { connect } from 'react-redux'

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import ThemeProvider from '../modules/theme/ThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

// import { getTheme } from '../modules/theme'
import { isFetchingI18nPhrases } from '../modules/reacticoon/i18n'

/**
 * The content of the app will have the `router` as children.
 * Use it to englobe the router with providers in order to not re-render those providers when the
 * route change
 *
 */
class Content extends Component {
  render() {
    const { theme, isFetchingI18nPhrases, children } = this.props

    // const muiTheme = getMuiTheme({ ...lightBaseTheme, ...theme })

    return isFetchingI18nPhrases
    ? // TODO: display loading
      null
    : children

    // return (
    //   {/* <MuiThemeProvider muiTheme={muiTheme}>
    //     <ThemeProvider
    //       themes={[muiTheme]}
    //       // themeInd={1}
    //       override
    //     > */}
         
    //     {/* </ThemeProvider> */}
    //   {/* </MuiThemeProvider> */}
    // )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // theme: getTheme(state),
    isFetchingI18nPhrases: isFetchingI18nPhrases(state),
  }
}

export default connect(mapStateToProps, {})(Content)
