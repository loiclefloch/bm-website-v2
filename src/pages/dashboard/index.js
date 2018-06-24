import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import { loadBookmarks, onLoadMoreBookmarks } from 'modules/bookmark/bookmarkList/actions'

import { isFetchingTags } from 'modules/tag'

import Page from 'components/Page'

import {
  makeGetFilteredBookmarks,
  isFetchingBookmarks,
  getBookmarksPaging,
} from 'modules/bookmark/bookmarkList/selectors'
import BookmarksList from './components/BookmarksList'

class DashboardPage extends Component {
  componentDidMount() {
    this.props.loadBookmarks()
  }

  render() {
    const { isFetchingBookmarks, bookmarks, paging } = this.props

    return (
      <Page title="Dashboard">
        <BookmarksList
          bookmarks={bookmarks}
          paging={paging}
          isFetching={isFetchingBookmarks}
          actions={{
            onLoadMore: this.props.onLoadMoreBookmarks,
            onSearchQueryChange: searchQuery => this.props.updateUI({ searchQuery }),
          }}
        />
      </Page>
    )
  }
}

DashboardPage.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  isFetchingBookmarks: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  isFetchingTags: PropTypes.bool.isRequired,

  /**
   */
  loadBookmarks: PropTypes.func.isRequired,

  /**
   * @param paging
   */
  onLoadMoreBookmarks: PropTypes.func.isRequired,
}

const makeMapStateToProps = () => {
  const getFilteredBookmarks = makeGetFilteredBookmarks()
  const mapStateToProps = (state, props) => {
    return {
      isFetchingBookmarks: isFetchingBookmarks(state),
      isFetchingTags: isFetchingTags(state),
      bookmarks: getFilteredBookmarks(state, props),
      paging: getBookmarksPaging(state),
    }
  }
  return mapStateToProps
}

export default ui({
  // see https://github.com/tonyhb/redux-ui/issues/49
  name: 'DashboardPage',
  persist: false,
  state: {
    searchQuery: '',
  },
})(
  connect(
    makeMapStateToProps,
    {
      loadBookmarks,
      onLoadMoreBookmarks,
    }
  )(DashboardPage)
)
