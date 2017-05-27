import { createSelector } from 'reselect'
import isNil from 'lodash/isNil'

import {
  formatBookmark,
} from './utils'


const getBookmarkIsFetching = (state) => state.entities.bookmark.get('isFetching')
const getBookmarks = (state) => state.entities.bookmark.get('list')

export const isFetchingBookmark = createSelector(
    getBookmarkIsFetching,
    (isFetching) => isFetching
)

export const getBookmark = createSelector(
    getBookmarks,
    (list) => {
      const bookmark = list.get('722')

      if (isNil(bookmark)) {
        return null
      }

      return formatBookmark(bookmark.toJS())
    }
)
