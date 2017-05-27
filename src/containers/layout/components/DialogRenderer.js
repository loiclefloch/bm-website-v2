import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
  shouldShowBookmarkAdd,
} from '../../../modules/bookmark'

import AddBookmarkDialog from '../../../pages/addBookmark/AddBookmarkDialog'

class DialogRenderer extends Component {

  render() {
    return (
      <div>
        {this.props.shouldShowBookmarkAdd && (
          <AddBookmarkDialog
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shouldShowBookmarkAdd: shouldShowBookmarkAdd(state),
  }
}

export default connect(mapStateToProps, {
})(DialogRenderer)
