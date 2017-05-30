import Immutable from "immutable"

import isNil from 'lodash/isNil'
import { push } from 'react-router-redux'
import { createApiCallAction } from '../../actions/creators'
import { createSelector } from 'reselect'
import { formatBookmark } from './utils'

import BookmarkApi from '../../api/BookmarkApi'
import RoutingEnum from '../../config/RoutingEnum'

import { POST_BOOKMARK_SUCCESS } from './newBookmark'

//
// Actions
//

export const BOOKMARK_REQUEST = 'BOOKMARK::GET:REQUEST'
export const BOOKMARK_SUCCESS = 'BOOKMARK::GET:SUCCESS'
export const BOOKMARK_FAILURE = 'BOOKMARK::GET:FAILURE'

const redirectToBookmark = bookmarkId => (dispatch, getState) => {
  return dispatch(push(RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId })))
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
// Selectors
//

const getBookmarkIsFetching = (state) => state.entities.bookmark.get('isFetching')
const getBookmarks = (state) => state.entities.bookmark.get('list')

export const isFetchingBookmark = createSelector(
    getBookmarkIsFetching,
    (isFetching) => isFetching
)

const getBookmarkIdOnProps = (state, props) => props.routeParams.bookmarkId


export const makeGetBookmark = () => {
    return createSelector(
      [ getBookmarkIdOnProps, getBookmarks ],
      (bookmarkId, list) => {
        const bookmark = list.get(bookmarkId)
        if (isNil(bookmark)) {
          return null
        }
        return formatBookmark(bookmark.toJS())
      }
    )
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
        list:  state.get('list').merge(action.response.entities.circles),
        lastUpdated: Date.now(),
      })

    case POST_BOOKMARK_SUCCESS:
      const newBookmark = action.response.result
      return state.merge({
        list: state.get('list').add(newBookmark),
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
