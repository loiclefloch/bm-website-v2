import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';

import BookmarksListItem from './BookmarksListItem'

const BookmarksList = ({ bookmarks, actions }) => {
  return (
    <List>
      {bookmarks.map(bookmark => {
        return (
          <BookmarksListItem
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
