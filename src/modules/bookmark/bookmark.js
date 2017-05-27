import Immutable from "immutable"

import isNil from 'lodash/isNil'
import { push } from 'react-router-redux'
import { createApiCallAction } from '../../actions/creators'

import BookmarkApi from '../../api/BookmarkApi'

//
// Actions
//

export const BOOKMARK_REQUEST = 'BOOKMARK::REQUEST'
export const BOOKMARK_SUCCESS = 'BOOKMARK::SUCCESS'
export const BOOKMARK_FAILURE = 'BOOKMARK::FAILURE'

const redirectToBookmark = bookmarkId => (dispatch, getState) => {
  // TODO: use RoutingEnum
  return dispatch(push(`/bookmarks/${bookmarkId}`))
}

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const fetchBookmark = (bookmarkId) => createApiCallAction(
  [
    BOOKMARK_REQUEST, BOOKMARK_SUCCESS, BOOKMARK_FAILURE
  ],
  BookmarkApi.getBookmark(bookmarkId)
)

/**
 *
 * @param  Bookmark|string bookmark either the bookmark or the bookmark.id
 */
export const showBookmark = bookmark => (dispatch, getState) => {
  const bookmarkId = isNil(bookmark.id) ? bookmark : bookmark.id
  return dispatch(redirectToBookmark(bookmarkId))
}

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  list: {
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const bookmark = (state = DEFAULT, action) => {
  switch (action.type) {
    case BOOKMARK_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case BOOKMARK_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        list: action.response.entities.bookmarks,
        lastUpdated: Date.now(),
      })

    case BOOKMARK_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
