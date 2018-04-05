import createMiddleware from '../../reacticoon/middleware/createMiddleware'
import { redirectToBookmark } from './actions'
import { redirectTo } from '../../reacticoon/routing'

export const redirectToBookmarkMiddleware = createMiddleware(
  'redirectToBookmarkMiddleware',
  redirectToBookmark,
  ({ action, dispatch }) => {
    dispatch(redirectTo(action.route, action.params))
  }
)
