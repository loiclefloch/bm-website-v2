// auth middleware

import { postBookmark } from '../newBookmark'
import RoutingEnum from '../../../config/RoutingEnum'
import { push } from 'react-router-redux'
import { hideAddBookmarkDialog } from '../'
import { createMiddleware } from '../../../modules/reactoon/middleware'

/**
 * Intercepts a new created bookmark:
 * - redirect to its page.
 * - Hide the AddBookmarkDialog
 */
const newBookmarkSuccessMiddleware = createMiddleware(
  'newBookmarkSuccessMiddleware',
  postBookmark.SUCCESS,
  ({ next, dispatch, action }) => {
    next(action) // send it to next so identity will be set

    // hide AddBookmarkDialog
    dispatch(hideAddBookmarkDialog())

    const newBookmark = action.response.result
    const route = RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId: newBookmark.id })

    // for testing purpose
    // const route = RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId: '723' })

    // redirect to the bookmark page.
    return next(push(route))
  }
)

const newBookmarkFailureMiddleware = createMiddleware(
  'newBookmarkFailureMiddleware',
  postBookmark.FAILURE,
  ({ next, dispatch, action }) => {
    // handle already exists, we redirect to it
    if (action.apiError.code === 101) {
      next(action)

      // hide AddBookmarkDialog
      dispatch(hideAddBookmarkDialog())

      const route = RoutingEnum.BOOKMARK.generatePathWithParams({
        bookmarkId: action.apiError.detail.id,
      })
      // redirect to the bookmark page.
      return next(push(route))
    }
  }
)

export default [newBookmarkSuccessMiddleware, newBookmarkFailureMiddleware]
