import Immutable from "immutable"

import isNil from 'lodash/isNil'
import createApiCallAction from '../../modules/redux/createApiCallAction'
import { createSelector } from 'reselect'
import { formatBookmark } from './utils'

import BookmarkApi from '../../api/BookmarkApi'
import RoutingEnum from '../../config/RoutingEnum'

export const postBookmark = createApiCallAction(
  'BOOKMARK::POST',
  bookmark => BookmarkApi.postBookmark(bookmark)
)

//
// Selectors
//

const getNewBookmarkDataOnState = (state) => state.entities.newBookmark
const getNewBookmarkOnState = (state) => state.entities.newBookmark.get('data')

const getApiError = (state) => state.entities.newBookmark.get('error')

export const getAddBookmarkError = createSelector(
    getApiError,
    (apiError) => {
      // TODO: remove second check
      if (isNil(apiError) || isNil(apiError.toJS)) {
        return null
      }
      return apiError.toJS()
    }
)

export const getNewBookmark = createSelector(
  getNewBookmarkOnState,
  (newBookmark) => {
    if (isNil(newBookmark)) {
      return null
    }
    return newBookmark.toJS()
  }
)

export const isAddBookmarkFetching = createSelector(
  getNewBookmarkDataOnState,
  (bookmarkData) => {
    return bookmarkData.get('isFetching')
  }
)

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: null,
  isFetching: false,
  lastUpdated: null,
  error: null,
  isCreated: false,
})

export const newBookmark = (state = DEFAULT, action) => {
  switch (action.type) {
    case postBookmark.REQUEST:
      return state.merge({
        data: action.request.data,
        isFetching: true,
        isCreated: false,
        error: null,
      })

    case postBookmark.requestSUCCESS:
      const newBookmark = action.response.result

      return state.merge({
        isFetching: false,
        error: null,
        data: newBookmark,
        lastUpdated: Date.now(),
        isCreated: true,
      })

    case postBookmark.FAILURE:
      return state.merge({
        isFetching: false,
        isCreated: true,
        error: action.apiError,
      })

    default:
      return state
  }
}
