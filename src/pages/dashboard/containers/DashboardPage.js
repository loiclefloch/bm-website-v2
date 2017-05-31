import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  showBookmark,
  loadBookmarks,
  onLoadMoreBookmarks,
} from '../../../modules/bookmark'

import { getBookmarksSortedByDate, isFetchingBookmarks, getBookmarksPaging } from '../selectors'
import BookmarksList from '../components/BookmarksList'

class DashboardPage extends Component {

  componentDidMount() {
    this.props.loadBookmarks()
  }

  render() {
    const { isFetchingBookmarks, bookmarks, paging } = this.props

    return (
      <div>
        <h1>Dashboard</h1>

        <BookmarksList
          bookmarks={bookmarks}
          paging={paging}
          isFetching={isFetchingBookmarks}
          actions={{
            showBookmark: this.props.showBookmark,
            onLoadMore: this.props.onLoadMoreBookmarks,
          }}
        />
      </div>
    )
  }
}

DashboardPage.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  isFetchingBookmarks: PropTypes.bool.isRequired,

  /**
   * @param bookmark
   */
  showBookmark: PropTypes.func.isRequired,

  /**
   */
  loadBookmarks: PropTypes.func.isRequired,

  /**
   * @param paging
   */
  onLoadMoreBookmarks: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingBookmarks: isFetchingBookmarks(state),
    bookmarks: getBookmarksSortedByDate(state),
    paging: getBookmarksPaging(state),
   }
}

export default connect(mapStateToProps, {
  showBookmark,
  loadBookmarks,
  onLoadMoreBookmarks,
})(DashboardPage)
