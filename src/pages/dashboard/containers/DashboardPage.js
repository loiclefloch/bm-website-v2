import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showBookmark } from '../DashboardActions'
import { getBookmarksSortedByDate, isFetching } from '../selectors'

import BookmarksList from '../components/BookmarksList'
import { loadBookmarks } from '../DashboardActions'

class DashboardPage extends Component {
  static propTypes = {
    bookmarks: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showBookmark: PropTypes.func.isRequired,
    loadBookmarks: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadBookmarks()
  }

  render() {
    const { isFetchingBookmarks, bookmarks } = this.props

    return (
      <div>
        <h1>Dashboard</h1>

        <BookmarksList
          bookmarks={bookmarks}
          isFetching={isFetchingBookmarks}
          actions={{
            showBookmark: this.props.showBookmark
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingBookmarks: isFetching(state),
    bookmarks: getBookmarksSortedByDate(state),
   }
}

export default connect(mapStateToProps, {
  showBookmark,
  loadBookmarks,
})(DashboardPage)
