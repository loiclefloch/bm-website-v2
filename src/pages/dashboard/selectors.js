import { createSelector } from 'reselect'

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getBookmarksMap = (state) => state.entities.bookmarksList.getIn([ 'data', 'bookmarks' ])

// memoized selector. It takes getBookmarksMap as input-selectors, and a transform function that
// calculates the data
const getBookmarks = createSelector(
    getBookmarksMap,
    (resultMap) => resultMap && resultMap.toArray()
);

export const getBookmarksAsList = createSelector(
  [ getBookmarks ],
  (bookmarks) => {
    return bookmarks
    // .filter(bookmark => {
    //   return true
    // })
    .map(bookmark => {
      return bookmark.toJS()
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

//
// Fetching
//

const getFetching = (state) => state.entities.bookmarksList.get('isFetching')

export const isFetching = createSelector(
    getFetching,
    (isFetching) => isFetching
);
