import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import LoadingBlock from 'components/loading/LoadingBlock'
import BookContainer from 'modules/book/views/BookContainer'
import BookmarksListContainer from 'modules/bookmark/bookmarkList/views/BookmarksListContainer'
import BookmarksList from 'components/bookmarksList'
import Header from './components/Header'

const styles = theme => ({})

const View = ({ circleId, bookId, classes }) => (
  <BookContainer circleId={circleId} bookId={bookId}>
    {({ book, isFetchingBook, bookError }) => (
      <LoadingBlock show={isFetchingBook || !book}>
        {() => (
          <React.Fragment>
            <Header book={book} />

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
        )}
      </LoadingBlock>
    )}
  </BookContainer>
)

export default withStyles(styles)(View)
