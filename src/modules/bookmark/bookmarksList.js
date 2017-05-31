import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import BookmarkApi from '../../api/BookmarkApi'
import merge from 'lodash/merge'

//
// Actions
//

export const BOOKMARKS_REQUEST = 'BOOKMARKS::REQUEST'
export const BOOKMARKS_SUCCESS = 'BOOKMARKS::SUCCESS'
export const BOOKMARKS_FAILURE = 'BOOKMARKS::FAILURE'

// Login on the api
export const loadBookmarks = (page = 1) => createApiCallAction(
  [
    BOOKMARKS_REQUEST, BOOKMARKS_SUCCESS, BOOKMARKS_FAILURE
  ],
  BookmarkApi.getBookmarks(page)
)

export const onLoadMoreBookmarks = paging => (dispatch, getState) => {
  const nextPage = paging.page + 1
  return dispatch(loadBookmarks(nextPage))
}

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    bookmarks: {},
    pagination: {},
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const bookmarksList = (state = DEFAULT, action) => {
  switch (action.type) {
    case BOOKMARKS_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case BOOKMARKS_SUCCESS:
      const oldData = state.get('data').toJS()
      const newState = state.mergeDeep({
        isFetching: false,
        error: null,
        data: {
          bookmarks: merge({}, oldData.bookmarks, action.response.entities.bookmarks),
          pagination: merge({}, oldData.pagination, action.response.entities.pagination),
        },
        lastUpdated: Date.now(),
      })

      return newState

    case BOOKMARKS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
