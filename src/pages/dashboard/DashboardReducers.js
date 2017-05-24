import Immutable from "immutable"

import {
  BOOKMARKS_REQUEST,
  BOOKMARKS_SUCCESS,
  BOOKMARKS_FAILURE,
  BOOKMARK_REQUEST,
  BOOKMARK_SUCCESS,
  BOOKMARK_FAILURE,
} from './DashboardActions'

const DEFAULT_BOOKMARKS = Immutable.fromJS({
  data: {
    bookmarks: [],
    paging: null,
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const bookmarksList = (state = DEFAULT_BOOKMARKS, action) => {
  switch (action.type) {
    case BOOKMARKS_REQUEST:
      return state.merge({
        isFetching: true,
        error: null
      })

    case BOOKMARKS_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case BOOKMARKS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.response.result,
      })

    default:
      return state
  }
}

const DEFAULT_BOOKMARK = Immutable.fromJS({
  data: {
    bookmark: {},
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const bookmark = (state = DEFAULT_BOOKMARK, action) => {
  switch (action.type) {
    case BOOKMARK_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.bookmark,
      })

    case BOOKMARK_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case BOOKMARK_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.response.result,
      })

    default:
      return state
  }
}
