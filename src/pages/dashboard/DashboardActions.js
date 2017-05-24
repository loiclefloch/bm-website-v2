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


export const SHOW_BOOKMARK = 'BOOKMARKS_REQUEST'

export const showBookmark = (bookmark) => {
  return {
    [SHOW_BOOKMARK]: {
      bookmark
    }
  }
}
