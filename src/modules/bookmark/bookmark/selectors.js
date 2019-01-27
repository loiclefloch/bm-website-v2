import isNil from 'lodash/isNil'
import { createSelector, getStateForModule } from 'reacticoon/selector'
import { formatBookmark } from '../utils'

const getState = getStateForModule('Bookmark')

export const isFetchingBookmark = createSelector(getState, state => state.get('isFetching'))
const getBookmarks = createSelector(getState, state => state.get('list'))

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
