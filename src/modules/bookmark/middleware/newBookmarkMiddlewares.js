// auth middleware

import { postBookmark } from '../newBookmark'
import { addInfoFlashMessage } from 'reacticoon-plugins/reacticoon-plugin-flash-messages/src/service'
import { redirectTo, getRoute } from 'reacticoon/routing'
import { hideAddBookmarkDialog } from '../'
import { createMiddleware } from 'reacticoon/middleware'

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

    addInfoFlashMessage({
      text: 'Bookmark created',
    })

    // for testing purpose
    // const route = RoutingEnum.BOOKMARK.generatePathWithParams({ bookmarkId: '723' })

    // redirect to the bookmark page.
    dispatch(
      redirectTo(getRoute('BOOKMARK'), {
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
        redirectTo(getRoute('BOOKMARK'), {
          bookmarkId: action.apiError.detail.id,
        })
      )
    }
  }
)

export default [newBookmarkSuccessMiddleware, newBookmarkFailureMiddleware]
