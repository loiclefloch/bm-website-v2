import { createSelector } from 'reselect'

import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import Fuse from 'fuse.js'

import { formatBookmark } from '../../modules/bookmark/utils'

//
// Bookmarks
//

const getBookmarksData = (state) => state.entities.bookmarksList.getIn([ 'data' ])

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getBookmarksMap = (state) => state.entities.bookmarksList.getIn([ 'data', 'bookmarks' ])

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getPaginationMap = (state) => state.entities.bookmarksList.getIn([ 'data', 'pagination' ])

const getBookmarksSearchQuery = (state, props) => props.ui.searchQuery

// memoized selector. It takes getBookmarksMap as input-selectors, and a transform function that
// calculates the data
const getBookmarks = createSelector(
    getBookmarksMap,
    (resultMap) => resultMap
);

export const getBookmarksAsList = createSelector(
  [ getBookmarks ],
  (bookmarks) => {
    return bookmarks
    // .filter(bookmark => {
    //   return true
    // })
    .map(bookmark => {
      return formatBookmark(bookmark.toJS())
    })

  }
)

export const getBookmarksSortedByDate = createSelector(
  [ getBookmarksAsList ],
  (bookmarks) => {
    return bookmarks.sort((a, b) => {
      return b.id - a.id // TODO: createdAt
    })
  }
)

export const getFilteredBookmarks = createSelector(
  [ getBookmarksAsList, getBookmarksSearchQuery ],
  (bookmarks, searchQuery) => {

    // no search, returns sorted by date
    if (isEmpty(searchQuery)) {
      return bookmarks.sort((a, b) => {
        return b.id - a.id // TODO: createdAt
      })
    }

    var options = {
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "description",
        "title",
        "name",
        "url",
        // "websiteInfo.",
      ]
    };
    var fuse = new Fuse(bookmarks.toArray(), options)
    const results = fuse.search(searchQuery)

    return results
  }
)

//
// Fetching bookmarksList
//

const getBookmarksIsFetching = (state) => state.entities.bookmarksList.get('isFetching')

export const isFetchingBookmarks = createSelector(
    getBookmarksIsFetching,
    (isFetching) => isFetching
)

//
//
//

export const getBookmarksPaging = createSelector(
    getPaginationMap,
    (pagination) => {
      // TODO
      const paging = pagination.last()

      if (isNil(paging)) {
        return null
      }

      // TODO: find better way
      return paging.toJS()
    }
)
