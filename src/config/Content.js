import React, { Component } from 'react'

import { connect } from 'reacticoon/view'
import { isFetchingI18nPhrases } from 'reacticoon/i18n'

import ReacticoonMaterialUIContent from 'reacticoon-plugins/reacticoon-material-ui/src/views/Content'

/**
 * The content of the app will have the `router` as children.
 * Use it to englobe the router with providers in order to not re-render those providers when the
 * route change
 */
class Content extends Component {
  render() {
    const { isFetchingI18nPhrases, children } = this.props

    return (
      <React.Fragment>
        <ReacticoonMaterialUIContent>
          {isFetchingI18nPhrases
            ? // TODO: display loading
              null
            : children}
        </ReacticoonMaterialUIContent>
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
