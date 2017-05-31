import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';
import BookmarksListItem from './BookmarksListItem'
import CircularProgress from 'material-ui/CircularProgress'
import LoadingList from '../../../components/loading/LoadingList'
import LoadMore from './LoadMore'

const style = {
  container: {
    marginTop: '30px'
  }
}

const BookmarksList = ({ bookmarks, paging, isFetching, actions }) => {
  return (
    <List
      style={style.container}
    >

      {isFetching &&
        <LoadingList
          listEmpty={bookmarks}
        />
      }

      {bookmarks.map(bookmark => {
        return (
          <BookmarksListItem
            key={bookmark.id}
            bookmark={bookmark}
            onShowBookmark={actions.showBookmark}
          />
        )
      })}

      <LoadMore
        paging={paging}
        onLoadMore={actions.onLoadMore}
      />
    </List>
  )
}

BookmarksList.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  paging: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,

  /**
   * Required actions:
   * - BookmarksListItem actions
   *   - showBookmark(bookmark)
   * - LoadMore
   *   - onLoadMore(paging)
   */
  actions: PropTypes.object.isRequired,
}

export default BookmarksList
