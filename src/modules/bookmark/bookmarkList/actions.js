import { createApiCallAction } from 'reacticoon/action'

import BookmarkApi from 'app/api/BookmarkApi'

//
// Actions
//

export const loadBookmarks = createApiCallAction('BOOKMARKS', (page = 1) =>
  BookmarkApi.getBookmarks(page)
)

export const loadBookmarksForBook = createApiCallAction('BOOKMARKS', (circleId, bookId, page = 1) =>
  BookmarkApi.getBookBookmarks(circleId, bookId, page)
)

export const onLoadMoreBookmarks = paging => dispatch => {
  const nextPage = paging.page + 1
  return dispatch(loadBookmarks(nextPage))
}

export const onLoadMoreBookBookmarks = (circleId, bookId, paging) => dispatch => {
  const nextPage = paging.page + 1
  return dispatch(loadBookmarksForBook(circleId, bookId, nextPage))
}
