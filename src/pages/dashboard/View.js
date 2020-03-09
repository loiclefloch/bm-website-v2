import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import BookmarksListContainer from 'modules/bookmark/bookmarkList/views/BookmarksListContainer'
import BookmarksList from 'components/bookmarksList'
import SidebarBooksView from './components/SidebarBooksView'
import SidebarTagsView from './components/SidebarTagsView'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sidebar: {
    marginTop: 95, // TODO: magic number
    marginLeft: 60,
  },
  sticky: {
    position: 'sticky',
    top: 160,
  },
  block: {
    marginBottom: theme.spacing.unit * 8,

    '& h2': {
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 300,
    },
  },
})

const View = ({ circleId, bookId, classes }) => (
  <React.Fragment>
    <div className={classes.root}>
      <BookmarksListContainer circleId={circleId} bookId={bookId}>
        {({
          isPendingBookmarks,
          isPendingTags,
          bookmarks,
          paging,
          onLoadMore,
          onSearchQueryChange,
        }) => (
          <BookmarksList
            bookmarks={bookmarks}
            paging={paging}
            isPending={isPendingBookmarks}
            actions={{
              onLoadMore,
              onSearchQueryChange,
            }}
          />
        )}
      </BookmarksListContainer>

      <div className={classes.sidebar}>
        <div className={classes.sticky}>
          <div className={classes.block}>
            <h2>Books</h2>

            <SidebarBooksView />
          </div>

          <div className={classes.block}>
            <h2>Tags</h2>

            <SidebarTagsView />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default withStyles(styles)(View)
