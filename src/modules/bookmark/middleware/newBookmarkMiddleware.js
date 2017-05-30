// auth middleware

import { POST_BOOKMARK_SUCCESS } from '../newBookmark'
import RoutingEnum from '../../../config/RoutingEnum'
import { push } from 'react-router-redux'
import { hideAddBookmarkDialog } from '../'

/**
 * Intercepts a new created bookmark:
 * - redirect to its page.
 * - Hide the AddBookmarkDialog
 */
function newBookmarkMiddleware({ getState, dispatch }) {
    return (next) => (action) => {
        if (typeof action === 'object' && action.hasOwnProperty('type')) {
            if (action.type === POST_BOOKMARK_SUCCESS) {
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
        }

        return next(action)
    }
}

export default newBookmarkMiddleware
