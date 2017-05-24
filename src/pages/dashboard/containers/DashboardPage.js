import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showBookmark } from '../DashboardActions'
import { getBookmarksSortedByDate, isFetching } from '../selectors'

import BookmarksList from '../components/BookmarksList'

class DashboardPage extends Component {
  static propTypes = {
    bookmarks: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showBookmark: PropTypes.func.isRequired,
  }

  render() {
    const { isFetching, bookmarks } = this.props

    return (
      <div>
        <h1>Dashboard</h1>
        {isFetching &&
          <h3>loading</h3>
        }

        <BookmarksList
          bookmarks={bookmarks}
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
    // isFetching: isFetching(state),
    bookmarks: getBookmarksSortedByDate(state),
   }
}

export default connect(mapStateToProps, {
  showBookmark
})(DashboardPage)
