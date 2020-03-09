import React, { Component } from 'react'

import { connect } from 'reacticoon/view'
import { isPendingI18nPhrases } from 'reacticoon/i18n'

import ReacticoonMaterialUIContent from 'reacticoon-plugins/reacticoon-plugin-material-ui/src/views/Content'

/**
 * The content of the app will have the `router` as children.
 * Use it to englobe the router with providers in order to not re-render those providers when the
 * route change
 */
class Content extends Component {
  render() {
    const { isPendingI18nPhrases, children } = this.props

    return (
      <React.Fragment>
        <ReacticoonMaterialUIContent>
          {isPendingI18nPhrases
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
    isPendingI18nPhrases: isPendingI18nPhrases(state),
  }
}

export default connect(mapStateToProps, {})(Content)
