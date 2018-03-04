import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchBookmark,
  updateBookmark,
  isFetchingBookmark,
  makeGetBookmark,
} from '../../modules/bookmark'

import { isFetchingTags } from '../../modules/tag'

import Page from '../../containers/Page'

import Header from './components/Header'
import Content from './components/Content'

import RightNav from './components/RightNav'
import ContentLoaderView from './components/ContentLoaderView'

class BookmarkPage extends Component {
  componentDidMount() {
    // load bookmark
    // TODO: use the newBookmark on state if exists.
    this.props.fetchBookmark(this.props.params.bookmarkId)
  }

  handleUpdateBookmark = bookmark => {
    this.props.updateBookmark(bookmark)
  }

  render() {
    const { isFetchingBookmark, bookmark } = this.props

    return (
      <Page title="" isFetching={false} loadingMessage="Loading bookmark">
        <div
          style={
            { maxWidth: '800px', paddingLeft: '5vw' } // TODO: remove on mobile
          }
        >
          {isFetchingBookmark || !bookmark ? (
            <ContentLoaderView />
          ) : (
            <div
              style={{
                height: '100%',
              }}
            >
              <Header bookmark={bookmark} />

              <RightNav bookmark={bookmark} onUpdateBookmark={this.handleUpdateBookmark} />

              <Content bookmark={bookmark} />
            </div>
          )}
        </div>
      </Page>
    )
  }
}

BookmarkPage.propTypes = {
  fetchBookmark: PropTypes.func.isRequired,
  isFetchingBookmark: PropTypes.bool.isRequired,
  bookmark: PropTypes.object,
}

const makeMapStateToProps = () => {
  const getBookmark = makeGetBookmark()
  const mapStateToProps = (state, props) => {
    return {
      isFetchingBookmark: isFetchingBookmark(state),
      bookmark: getBookmark(state, props),
      isFetchingTags: isFetchingTags(state),
    }
  }
  return mapStateToProps
}

export default connect(makeMapStateToProps, {
  fetchBookmark,
  updateBookmark,
})(BookmarkPage)
