import { push } from 'react-router-redux'

import createApiCallAction from 'reacticoon/action/createApiCallAction'
import createAction from 'reacticoon/action/createAction'

import isNil from 'lodash/isNil'

import BookmarkApi from '../../../api/BookmarkApi'
import RoutingEnum from '../../../config/RoutingEnum'

//
// Actions
//

export const redirectToBookmark = createAction('redirectToBookmark', bookmarkId => ({
  route: RoutingEnum.BOOKMARK,
  params: { bookmarkId },
}))

export const fetchBookmark = createApiCallAction('BOOKMARK::GET', bookmarkId =>
  BookmarkApi.getBookmark(bookmarkId)
)

//
// Update bookmark
//

export const updateBookmark = createApiCallAction('BOOKMARK::PUT', bookmark =>
  BookmarkApi.putBookmark(bookmark)
)

/**
 *
 * @param  Bookmark|string bookmark either the bookmark or the bookmark.id
 */
export const showBookmark = bookmark => (dispatch, getState) => {
  const bookmarkId = isNil(bookmark.id) ? bookmark : bookmark.id
  return dispatch(redirectToBookmark(bookmarkId))
}

export const addTagsToBookmark = createApiCallAction(
  'BOOKMARK::TAGS::PUT',
  (tags, bookmark) => BookmarkApi.putBookmarkTags(bookmark, tags),
  (tags, bookmark) => ({
    // we give the bookmark with the new tags, so we display the bookmark before the api call
    // end
    bookmark: { ...bookmark, tags },
  })
)
