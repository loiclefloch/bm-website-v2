import Immutable from 'immutable'

import { postBookmark } from '../newBookmark'

import {
  fetchBookmark,
  updateBookmark,
  addTagsToBookmark,
} from './actions.js'


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

const bookmarkReducer = (state = DEFAULT, action) => {
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

export default bookmarkReducer