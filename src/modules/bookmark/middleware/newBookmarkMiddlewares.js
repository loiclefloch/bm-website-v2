// auth middleware

import { postBookmark } from '../newBookmark'
import RoutingEnum from '../../../config/RoutingEnum'
import { redirectTo } from '../../../modules/reacticoon/routing'
import { hideAddBookmarkDialog } from '../'
import { createMiddleware } from '../../../modules/reacticoon/middleware'

/**
 * Intercepts a new created bookmark:
 * - redirect to its page.
 * - Hide the AddBookmarkDialog
 */
const newBookmarkSuccessMiddleware = createMiddleware(
  'newBookmarkSuccessMiddleware',
  postBookmark.SUCCESS,
  ({ next, dispatch, action }) => {
    // hide AddBookmarkDialog
    dispatch(hideAddBookmarkDialog())

    const newBookmark = action.response.result

    // for testing purpose
    // const route = RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId: '723' })

    // redirect to the bookmark page.
    dispatch(
      redirectTo(RoutingEnum.BOOKMARK, {
        bookmarkId: newBookmark.id,
      })
    )
  }
)

const newBookmarkFailureMiddleware = createMiddleware(
  'newBookmarkFailureMiddleware',
  postBookmark.FAILURE,
  ({ next, dispatch, action }) => {
    // handle already exists, we redirect to it
    if (action.apiError.code === 101) {
      // hide AddBookmarkDialog
      dispatch(hideAddBookmarkDialog())

      // redirect to the bookmark page.
      dispatch(
        redirectTo(RoutingEnum.BOOKMARK, {
          bookmarkId: action.apiError.detail.id,
        })
      )
    }
  }
)

export default [newBookmarkSuccessMiddleware, newBookmarkFailureMiddleware]
