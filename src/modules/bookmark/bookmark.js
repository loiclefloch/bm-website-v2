import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import BookmarkApi from '../../api/BookmarkApi'

//
// Actions
//

export const BOOKMARK_REQUEST = 'BOOKMARK::REQUEST'
export const BOOKMARK_SUCCESS = 'BOOKMARK::SUCCESS'
export const BOOKMARK_FAILURE = 'BOOKMARK::FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchBookmark = (bookmark) => createApiCallAction(
  [
    BOOKMARK_REQUEST, BOOKMARK_SUCCESS, BOOKMARK_FAILURE
  ],
  BookmarkApi.getBookmark(bookmark.id)
)

export const showBookmark = bookmark => (dispatch, getState) => {
  return dispatch(fetchBookmark(bookmark))
}

//
// Reducer
//

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
