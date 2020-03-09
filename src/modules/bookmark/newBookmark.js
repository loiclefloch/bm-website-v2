import Immutable from 'immutable'

import isNil from 'lodash/isNil'
import { createApiCallAction } from 'reacticoon/action'
import { createSelector } from 'reselect'

import BookmarkApi from '../../api/BookmarkApi'

export const postBookmark = createApiCallAction('BOOKMARK::POST', bookmark =>
  BookmarkApi.postBookmark(bookmark)
)

//
// Selectors
//

const getNewBookmarkDataOnState = state => state.newBookmark
const getNewBookmarkOnState = state => state.newBookmark.get('data')

const getApiError = state => state.newBookmark.get('error')

export const getAddBookmarkError = createSelector(getApiError, apiError => {
  // TODO: remove second check
  if (isNil(apiError) || isNil(apiError.toJS)) {
    return null
  }
  return apiError.toJS()
})

export const getNewBookmark = createSelector(getNewBookmarkOnState, newBookmark => {
  if (isNil(newBookmark)) {
    return null
  }
  return newBookmark.toJS()
})

export const isAddBookmarkFetching = createSelector(getNewBookmarkDataOnState, bookmarkData => {
  return bookmarkData.get('isPending')
})

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: null,
  isPending: false,
  lastUpdated: null,
  error: null,
  isCreated: false,
})

export const newBookmark = (state = DEFAULT, action) => {
  switch (action.type) {
    case postBookmark.REQUEST:
      return state.merge({
        data: action.request.data,
        isPending: true,
        isCreated: false,
        error: null,
      })

    case postBookmark.SUCCESS:
      const newBookmark = action.response.result

      return state.merge({
        isPending: false,
        error: null,
        data: newBookmark,
        lastUpdated: Date.now(),
        isCreated: true,
      })

    case postBookmark.FAILURE:
      return state.merge({
        isPending: false,
        isCreated: true,
        error: action.apiError,
      })

    default:
      return state
  }
}
