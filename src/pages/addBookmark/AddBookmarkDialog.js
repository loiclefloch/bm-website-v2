import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
  hideAddBookmarkDialog,
} from '../../modules/bookmark'

import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import AddBookmarkView from './components/AddBookmarkView'

class AddBookmarkDialog extends Component {

  render() {
    return (
      <Dialog
        modal={true}
        open={true}
        autoScrollBodyContent={true}
        onRequestClose={this.props.hideAddBookmarkDialog}
      >
        <IconButton
          onClick={this.props.hideAddBookmarkDialog}
          className="u-flexCenter u-justifyContentCenter u-absolute u-right0 u-top0"
          style={{
            width: 48,
            height: 48,
          }}
          iconStyle={{
            width: 36,
            height: 36,
            padding: 0,
          }}
        >
          <ClearIcon />
        </IconButton>

        <AddBookmarkView
        />
      </Dialog>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {
  hideAddBookmarkDialog
})(AddBookmarkDialog)
