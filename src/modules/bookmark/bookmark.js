import Immutable from "immutable"

import isNil from 'lodash/isNil'
import { push } from 'react-router-redux'
import { createApiCallAction } from '../../actions/creators'
import { createSelector } from 'reselect'
import { formatBookmark } from './utils'

import BookmarkApi from '../../api/BookmarkApi'

//
// Actions
//

export const BOOKMARK_REQUEST = 'BOOKMARK::GET:REQUEST'
export const BOOKMARK_SUCCESS = 'BOOKMARK::GET:SUCCESS'
export const BOOKMARK_FAILURE = 'BOOKMARK::GET:FAILURE'

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

export const POST_BOOKMARK_REQUEST = 'BOOKMARK::POST:REQUEST'
export const POST_BOOKMARK_SUCCESS = 'BOOKMARK::POST:SUCCESS'
export const POST_BOOKMARK_FAILURE = 'BOOKMARK::POST:FAILURE'

export const postBookmark = bookmark => createApiCallAction(
  [
    POST_BOOKMARK_REQUEST, POST_BOOKMARK_SUCCESS, POST_BOOKMARK_FAILURE
  ],
  BookmarkApi.postBookmark(bookmark)
)

//
// Selectors
//

const getBookmarkIsFetching = (state) => state.entities.bookmark.get('isFetching')
const getBookmarks = (state) => state.entities.bookmark.get('list')

// TODO
const getApiError = (state) => null

export const isFetchingBookmark = createSelector(
    getBookmarkIsFetching,
    (isFetching) => isFetching
)

export const getBookmark = createSelector(
    getBookmarks,
    (list) => {
      const bookmark = list.get('722')

      if (isNil(bookmark)) {
        return null
      }

      return formatBookmark(bookmark.toJS())
    }
)

export const getAddBookmarkError = createSelector(
    getApiError,
    (apiError) => {
      return apiError
    }
)

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
