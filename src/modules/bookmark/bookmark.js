import Immutable from 'immutable'

import isNil from 'lodash/isNil'
import { push } from 'react-router-redux'
import createApiCallAction from '../../modules/redux/createApiCallAction'
import { createSelector } from 'reselect'
import { formatBookmark } from './utils'

import BookmarkApi from '../../api/BookmarkApi'
import RoutingEnum from '../../config/RoutingEnum'

import { postBookmark } from './newBookmark'

//
// Actions
//

const redirectToBookmark = bookmarkId => (dispatch, getState) => {
  return dispatch(push(RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId })))
}

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

export const addTagsToBookmark = 
  createApiCallAction(
    'BOOKMARK::TAGS::PUT',
    (tags, bookmark) => BookmarkApi.putBookmarkTags(bookmark, tags),
    (tags, bookmark) => ({
      // we give the bookmark with the new tags, so we display the bookmark before the api call
      // end
      bookmark: { ...bookmark, tags },
    })
  )

//
// Selectors
//

const getBookmarkIsFetching = state => state.entities.bookmark.get('isFetching')
const getBookmarks = state => state.entities.bookmark.get('list')

export const isFetchingBookmark = createSelector(getBookmarkIsFetching, isFetching => isFetching)

const getBookmarkIdOnProps = (state, props) => props.routeParams.bookmarkId

export const makeGetBookmark = () => {
  return createSelector([getBookmarkIdOnProps, getBookmarks], (bookmarkId, list) => {
    const bookmark = list.get(bookmarkId)
    if (isNil(bookmark)) {
      return null
    }
    return formatBookmark(bookmark.toJS())
  })
}

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  list: {},
  isFetching: false,
  isFetchingTags: false, // When updating the bookmark tags
  lastUpdated: null,
  error: null,
})

export const bookmark = (state = DEFAULT, action) => {
  switch (action.type) {
    case fetchBookmark.REQUEST:
    case updateBookmark.REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case fetchBookmark.SUCCESS:
    case updateBookmark.SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        list: {
          ...state.get('list').toJS(),
          ...action.response.entities.bookmarks,
        },
        lastUpdated: Date.now(),
      })

    /*
     * update the bookmark's tags on the request to display the new selected tags directly,
     * without waiting for the request to end.
     */
    case addTagsToBookmark.REQUEST:
      return state.merge({
        isFetchingTags: true,
        list: {
          ...state.get('list').toJS(),
          // update the bookmark so the modification is see before the api call end.
          [action.data.bookmark.id]: action.data.bookmark,
        },
      })

    case addTagsToBookmark.SUCCESS:
      return state.merge({
        isFetchingTags: false,
        list: {
          ...state.get('list').toJS(),
          ...action.response.entities.bookmarks,
        },
      })

    case addTagsToBookmark.FAILURE:
      // TODO
      return state.merge({
        isFetchingTags: false,
      })

    case postBookmark.SUCCESS:
      const postedNewBookmark = action.response.result
      return state.merge({
        list: {
          ...state.get('list').toJS(),
          [postedNewBookmark.id]: postedNewBookmark,
        },
      })

    case fetchBookmark.FAILURE:
    case updateBookmark.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
