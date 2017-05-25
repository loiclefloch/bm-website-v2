import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';
import BookmarksListItem from './BookmarksListItem'
import CircularProgress from 'material-ui/CircularProgress'
import LoadingList from '../../../components/loading/LoadingList'

const style = {
  container: {
    marginTop: '30px'
  }
}

const BookmarksList = ({ bookmarks, isFetching, actions }) => {
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
            actions={actions}
          />
        )
      })}
    </List>
  )
}

BookmarksList.propTypes = {
  bookmarks: PropTypes.array.isRequired,
}

export default BookmarksList
