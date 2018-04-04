import createMiddleware from '../../reactoon/middleware/createMiddleware'
import { redirectToBookmark } from './actions'
import { redirectTo } from '../../reactoon/routing'

export const redirectToBookmarkMiddleware = createMiddleware(
  'redirectToBookmarkMiddleware',
  redirectToBookmark,
  ({ action, dispatch }) => {
    dispatch(redirectTo(action.route, action.params))
  }
)
