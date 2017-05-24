import { createApiCallAction } from '../../actions/creators'

import BookmarkApi from '../../api/BookmarkApi'

export const BOOKMARKS_REQUEST = 'BOOKMARKS_REQUEST'
export const BOOKMARKS_SUCCESS = 'BOOKMARKS_SUCCESS'
export const BOOKMARKS_FAILURE = 'BOOKMARKS_FAILURE'

// Login on the api
export const loadBookmarks = () => createApiCallAction(
  [
    BOOKMARKS_REQUEST, BOOKMARKS_SUCCESS, BOOKMARKS_FAILURE
  ],
  BookmarkApi.getBookmarks()
)

export const showBookmark = bookmark => (dispatch, getState) => {
  return dispatch(fetchBookmark(bookmark))
}


export const BOOKMARK_REQUEST = 'BOOKMARK_REQUEST'
export const BOOKMARK_SUCCESS = 'BOOKMARK_SUCCESS'
export const BOOKMARK_FAILURE = 'BOOKMARK_FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchBookmark = (bookmark) => createApiCallAction(
  [
    BOOKMARK_REQUEST, BOOKMARK_SUCCESS, BOOKMARK_FAILURE
  ],
  BookmarkApi.getBookmark(bookmark.id)
)
