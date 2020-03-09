import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import LoadingList from 'components/loading/LoadingList'
import SearchBar from 'components/search/SearchBar'
import BookmarksListItem from './BookmarksListItem'
import LoadMore from './LoadMore'

const styles = theme => ({
  container: {
    marginTop: '0',
    // paddingLeft: '5vw',
    width: '800px',
    maxWidth: '800px',
    paddingBottom: theme.spacing.unit * 10,
  },
  searchBar: {
    width: '60%',
  },
  bookmarksList: {
    marginTop: theme.spacing.unit * 6,
  },
})

const BookmarksList = ({ bookmarks, paging, isPending, actions, classes, onSearchQueryChange }) => {
  return (
    <List className={classes.container}>
      {paging && (
        <SearchBar
          onChange={event => actions.onSearchQueryChange(event.target.value)}
          // TODO: value
          className={classes.searchBar}
        />
      )}

      <div className={classes.bookmarksList}>
        {isPending && <LoadingList listEmpty={bookmarks} />}
        {bookmarks.map(bookmark => (
          <BookmarksListItem key={bookmark.id.toString()} bookmark={bookmark} />
        ))}
      </div>

      <LoadMore paging={paging} onLoadMore={actions.onLoadMore} />
    </List>
  )
}

BookmarksList.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  paging: PropTypes.object.isRequired,
  isPending: PropTypes.bool.isRequired,

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

export default withStyles(styles)(BookmarksList)
