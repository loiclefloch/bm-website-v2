import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchBookmark,
  isFetchingBookmark,
  makeGetBookmark
} from "../../modules/bookmark";

import { isFetchingTags } from "../../modules/tag";

import Page from "../../containers/Page";

import Header from "./components/Header";
import Content from "./components/Content";

import RightNav from "./components/RightNav";

class BookmarkPage extends Component {
  componentDidMount() {
    // load bookmark
    // TODO: use the newBookmark on state if exists.
    this.props.fetchBookmark(this.props.params.bookmarkId);
  }

  render() {
    const { isFetchingBookmark, bookmark } = this.props;

    return (
      <Page
        title=""
        isFetching={isFetchingBookmark || !bookmark}
        loadingMessage="Loading bookmark"
      >
        <div
          style={
            { maxWidth: "800px", paddingLeft: "5vw" } // TODO: remove on mobile
          }
        >
          <Header bookmark={bookmark} />

          <RightNav bookmark={bookmark} />

          <Content bookmark={bookmark} />
        </div>
      </Page>
    );
  }
}

BookmarkPage.propTypes = {
  fetchBookmark: PropTypes.func.isRequired,
  isFetchingBookmark: PropTypes.bool.isRequired,
  bookmark: PropTypes.object
};

const makeMapStateToProps = () => {
  const getBookmark = makeGetBookmark();
  const mapStateToProps = (state, props) => {
    return {
      isFetchingBookmark: isFetchingBookmark(state),
      bookmark: getBookmark(state, props),
      isFetchingTags: isFetchingTags(state)
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps, {
  fetchBookmark
})(BookmarkPage);
