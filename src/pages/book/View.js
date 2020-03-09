import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import LoadingBlock from 'components/loading/LoadingBlock'
import BookmarksListContainer from 'modules/bookmark/bookmarkList/views/BookmarksListContainer'
import BookmarksList from 'components/bookmarksList'
import Header from './components/Header'

import BookContainer from 'modules/book/container'

const styles = theme => ({
  bookmarksList__container: {
    margin: '0 auto',
  },
})

const View = ({ circleId, bookId, classes }) => (
  <BookContainer apiCallParameters={[circleId, bookId]}>
    {({ data: book, isPending: isPendingBook, error: bookError }) => (
      <LoadingBlock show={isPendingBook || !book}>
        {() => (
          <React.Fragment>
            <Header book={book} />

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
                  classes={{
                    container: classes.bookmarksList__container,
                  }}
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
          </React.Fragment>
        )}
      </LoadingBlock>
    )}
  </BookContainer>
)

export default withStyles(styles)(View)
