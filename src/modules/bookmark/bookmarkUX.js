import Immutable from "immutable"

import { createSelector } from 'reselect'

export const BOOKMARK_SHOW_ADD = 'BOOKMARK::SHOW_ADD'
export const BOOKMARK_HIDE_ADD = 'BOOKMARK::HIDE_ADD'

/**
 *
 */
export const showAddBookmarkDialog = () => (dispatch, getState) => {
  return dispatch({
    type: BOOKMARK_SHOW_ADD,
  })
}

/**
 */
export const hideAddBookmarkDialog = () => (dispatch, getState) => {
  return dispatch({
    type: BOOKMARK_HIDE_ADD,
  })
}

//
// selectors
//

const getBookmarkUX = (state) => state.ux.bookmarkUX

export const shouldShowBookmarkAdd = createSelector(
    getBookmarkUX,
    (bookmarkUX) => bookmarkUX.get('showAddBookmarkDialogModal')
)


//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  showAddBookmarkDialogModal: false,
})

export const bookmarkUX = (state = DEFAULT, action) => {
  switch (action.type) {
    case BOOKMARK_SHOW_ADD:
      return state.mergeDeep({
        showAddBookmarkDialogModal: true,
      })

    case BOOKMARK_HIDE_ADD:
      return state.mergeDeep({
        showAddBookmarkDialogModal: false,
      })

    default:
      return state
  }
}
