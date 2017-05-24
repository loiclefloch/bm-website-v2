import Immutable from "immutable"

import { BOOKMARKS_REQUEST, BOOKMARKS_SUCCESS, BOOKMARKS_FAILURE } from './DashboardActions'

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
