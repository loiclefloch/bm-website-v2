import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import BookmarkApi from '../../api/BookmarkApi'

import { UPDATE_BOOKMARK_TAGS_SUCCESS, UPDATE_BOOKMARK_TAGS_REQUEST } from './bookmark'

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
  const oldData = state.get('data').toJS()

  switch (action.type) {
    case BOOKMARKS_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case BOOKMARKS_SUCCESS:
      const newState = state.merge({
        isFetching: false,
        error: null,
        data: {
          bookmarks: { ...oldData.bookmarks, ...action.response.entities.bookmarks },
          pagination: { ...oldData.pagination, ...action.response.entities.pagination },
        },
        lastUpdated: Date.now(),
      })

      return newState

    case BOOKMARKS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    /*
     * update the bookmark's tags on the request to display the new selected tags directly,
     * without waiting for the request to end.
     */
    case UPDATE_BOOKMARK_TAGS_REQUEST:
      return state.merge({
        data: {
          ...oldData,
          bookmarks: {
            [action.data.bookmark.id]: action.data.bookmark,
          }
        },
      })

    case UPDATE_BOOKMARK_TAGS_SUCCESS:
      return state.merge({
        data: {
          ...oldData,
          bookmarks: { ...oldData.bookmarks, ...action.response.entities.bookmarks },
        },
      })

    default:
      return state
  }
}
