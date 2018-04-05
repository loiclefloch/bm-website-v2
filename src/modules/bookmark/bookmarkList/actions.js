import createApiCallAction from '../../../modules/reacticoon/action/createApiCallAction'

import BookmarkApi from '../../../api/BookmarkApi'

//
// Actions
//

export const loadBookmarks = createApiCallAction('BOOKMARKS', (page = 1) =>
  BookmarkApi.getBookmarks(page)
)

export const onLoadMoreBookmarks = paging => (dispatch, getState) => {
  const nextPage = paging.page + 1
  return dispatch(loadBookmarks(nextPage))
}

