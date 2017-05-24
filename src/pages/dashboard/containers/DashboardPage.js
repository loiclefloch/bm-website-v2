import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showBookmark } from '../DashboardActions'
import { getBookmarksSortedByDate, isFetching } from '../selectors'

import BookmarksList from '../components/BookmarksList'

class DashboardPage extends Component {
  static propTypes = {
    bookmarks: PropTypes.array
  }

  render() {
    const { actions, bookmarks, isFetching } = this.props

    return (
      <div>
        <h1>Dashboard</h1>
        {isFetching &&
          <h3>loading</h3>
        }

        <BookmarksList
          bookmarks={bookmarks}
          actions={actions}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // isFetching: isFetching(state),
    bookmarks: getBookmarksSortedByDate(state),
    actions: {
      showBookmark: showBookmark
    }
   }
}

export default connect(mapStateToProps, {
  showBookmark
})(DashboardPage)
