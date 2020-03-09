import Immutable from 'immutable'
import { loadBookmarks } from './actions'

import { addTagsToBookmark } from '../bookmark/actions'

const DEFAULT = Immutable.fromJS({
  data: {
    bookmarks: {},
    pagination: {},
  },
  isPending: false,
  lastUpdated: null,
  error: null,
})

export const bookmarksListReducer = (state = DEFAULT, action) => {
  const oldData = state.get('data') //.toJS()

  switch (action.type) {
    case loadBookmarks.REQUEST:
      return state.merge({
        isPending: true,
        data: {
          bookmarks: {},
          pagination: {},
        },
        error: null,
      })

    case loadBookmarks.SUCCESS:
      const newState = state.merge({
        isPending: false,
        error: null,
        data: {
          bookmarks: { ...oldData.bookmarks, ...action.response.entities.bookmarks },
          pagination: { ...oldData.pagination, ...action.response.entities.pagination },
        },
        lastUpdated: Date.now(),
      })

      return newState

    case loadBookmarks.FAILURE:
      return state.merge({
        isPending: false,
        error: action.apiError,
      })

    /*
     * update the bookmark's tags on the request to display the new selected tags directly,
     * without waiting for the request to end.
     */
    case addTagsToBookmark.REQUEST:
      return state.merge({
        data: {
          ...oldData,
          bookmarks: {
            [action.data.bookmark.id]: action.data.bookmark,
          },
        },
      })

    case addTagsToBookmark.SUCCESS:
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

export default bookmarksListReducer
