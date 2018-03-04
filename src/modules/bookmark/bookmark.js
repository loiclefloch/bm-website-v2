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

//
// Update bookmark
//

export const PUT_BOOKMARK_REQUEST = 'BOOKMARK::PUT:REQUEST'
export const PUT_BOOKMARK_SUCCESS = 'BOOKMARK::PUT:SUCCESS'
export const PUT_BOOKMARK_FAILURE = 'BOOKMARK::PUT:FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const updateBookmark = bookmark => createApiCallAction(
  [
    PUT_BOOKMARK_REQUEST, PUT_BOOKMARK_SUCCESS, PUT_BOOKMARK_FAILURE
  ],
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

export const UPDATE_BOOKMARK_TAGS_REQUEST = 'BOOKMARK::TAGS::PUT:REQUEST'
export const UPDATE_BOOKMARK_TAGS_SUCCESS = 'BOOKMARK::TAGS::PUT:SUCCESS'
export const UPDATE_BOOKMARK_TAGS_FAILURE = 'BOOKMARK::TAGS::PUT:FAILURE'

export const addTagsToBookmark = (tags, bookmark) => createApiCallAction(
  [
    UPDATE_BOOKMARK_TAGS_REQUEST, UPDATE_BOOKMARK_TAGS_SUCCESS, UPDATE_BOOKMARK_TAGS_FAILURE
  ],
  BookmarkApi.putBookmarkTags(bookmark, tags),
  {
    // we give the bookmark with the new tags, so we display the bookmark before the api call
    // end
    bookmark: { ...bookmark, tags },
  }
)

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
  isFetchingTags: false, // When updating the bookmark tags
  lastUpdated: null,
  error: null
})

export const bookmark = (state = DEFAULT, action) => {
  switch (action.type) {
    case BOOKMARK_REQUEST:
    case PUT_BOOKMARK_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case BOOKMARK_SUCCESS:
    case PUT_BOOKMARK_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        list: {
          ...state.get('list').toJS(),
          ...action.response.entities.bookmarks
        },
        lastUpdated: Date.now(),
      })

    /*
     * update the bookmark's tags on the request to display the new selected tags directly,
     * without waiting for the request to end.
     */
    case UPDATE_BOOKMARK_TAGS_REQUEST:
      return state.merge({
        isFetchingTags: true,
        list: {
          ...state.get('list').toJS(),
          // update the bookmark so the modification is see before the api call end.
          [action.data.bookmark.id]: action.data.bookmark,
        },
      })

    case UPDATE_BOOKMARK_TAGS_SUCCESS:
      return state.merge({
        isFetchingTags: false,
        list: {
          ...state.get('list').toJS(),
          ...action.response.entities.bookmarks
        },
      })

    case UPDATE_BOOKMARK_TAGS_FAILURE:
      // TODO
      return state.merge({
        isFetchingTags: false,
      })
      break

    case POST_BOOKMARK_SUCCESS:
      const postedNewBookmark = action.response.result
      return state.merge({
        list: {
          ...state.get('list').toJS(),
          [postedNewBookmark.id]: postedNewBookmark
        },
      })

    case BOOKMARK_FAILURE:
    case PUT_BOOKMARK_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
