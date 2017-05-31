import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';
import BookmarksListItem from './BookmarksListItem'
import CircularProgress from 'material-ui/CircularProgress'
import LoadingList from '../../../components/loading/LoadingList'
import LoadMore from './LoadMore'
import SearchBar from '../../../components/search/SearchBar'

const style = {
  container: {
    marginTop: '30px'
  }
}

const BookmarksList = ({ bookmarks, paging, isFetching, actions, onSearchQueryChange }) => {
  return (
    <List
      style={style.container}
    >

      {isFetching &&
        <LoadingList
          listEmpty={bookmarks}
        />
      }

      <SearchBar
        onChange={ (event, value) => actions.onSearchQueryChange(value) }
        style={{
          width: '60%',
        }}
      />

      <div
        style={{
          marginTop: '20px',
        }}
      >
        {bookmarks.map(bookmark => {
          return (
            <BookmarksListItem
              key={bookmark.id}
              bookmark={bookmark}
              onShowBookmark={actions.showBookmark}
            />
          )
        })}
      </div>

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
   * - onSearchQueryChange(string)
   */
  actions: PropTypes.object.isRequired,
}

export default BookmarksList
