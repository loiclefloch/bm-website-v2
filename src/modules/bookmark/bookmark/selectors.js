import isNil from 'lodash/isNil'
import { createSelector } from 'reacticoon/selector'
import { formatBookmark } from '../utils'

const getBookmarkIsFetching = state => state.entities.Bookmark.get('isFetching')
const getBookmarks = state => state.entities.Bookmark.get('list')

export const isFetchingBookmark = createSelector(getBookmarkIsFetching, isFetching => isFetching)

const getBookmarkIdOnProps = (state, props) => props.routeParams.bookmarkId

export const makeGetBookmark = () => {
  return createSelector([getBookmarkIdOnProps, getBookmarks], (bookmarkId, list) => {
    const bookmark = list.get(bookmarkId)
    if (isNil(bookmark)) {
      return null
    }
    return formatBookmark(bookmark.toJS())
  })
}
