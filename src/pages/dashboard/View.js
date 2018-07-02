import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import BookmarksListContainer from 'modules/bookmark/bookmarkList/views/BookmarksListContainer'
import BookmarksList from 'components/bookmarksList'

const styles = theme => ({})

const View = ({ circleId, bookId, classes }) => (
  <React.Fragment>
    <BookmarksListContainer circleId={circleId} bookId={bookId}>
      {({
        isFetchingBookmarks,
        isFetchingTags,
        bookmarks,
        paging,
        onLoadMore,
        onSearchQueryChange,
      }) => (
        <BookmarksList
          bookmarks={bookmarks}
          paging={paging}
          isFetching={isFetchingBookmarks}
          actions={{
            onLoadMore,
            onSearchQueryChange,
          }}
        />
      )}
    </BookmarksListContainer>
  </React.Fragment>
)

export default withStyles(styles)(View)
