import Immutable from 'immutable'

import { createReducer } from 'reacticoon/reducer'
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


const onRequest = state => state.merge({
  isFetching: true,
  error: null,
})

const onSuccess = (state, action) => state.merge({
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
const onAddTagsRequest = (state, action) => state.merge({
  isFetchingTags: true,

  list: {
    ...state.get('list').toJS(),
    // update the bookmark so the modification is see before the api call end.
    [action.data.bookmark.id]: action.data.bookmark,
  },
})

const onAddTagsSuccess = (state, action) => state.merge({
  isFetchingTags: false,
  list: {
    ...state.get('list').toJS(),
    ...action.response.entities.bookmarks,
  },
})

// TODO
const onAddTagsFailure = (state, action) => state.merge({
  isFetchingTags: false,
})

const onCreateBookmarkSuccess = (state, action) => {
  const postedNewBookmark = action.response.result
  return state.merge({
    list: {
      ...state.get('list').toJS(),
      [postedNewBookmark.id]: postedNewBookmark,
    },
  })
}

const onError = (state, action) => state.merge({
  isFetching: false,
  error: action.apiError,
})

const bookmarkReducer = createReducer(DEFAULT, {
  [fetchBookmark.REQUEST]: onRequest,
  [updateBookmark.REQUEST]: onRequest,
  [fetchBookmark.SUCCESS]: onSuccess,
  [updateBookmark.SUCCESS]: onSuccess,
  [addTagsToBookmark.REQUEST]: onAddTagsRequest,
  [addTagsToBookmark.SUCCESS]: onAddTagsSuccess,
  [addTagsToBookmark.FAILURE]: onAddTagsFailure,
  [postBookmark.SUCCESS]: onCreateBookmarkSuccess,
  [fetchBookmark.FAILURE]: onError,
  [updateBookmark.FAILURE]: onError,

})

export default bookmarkReducer