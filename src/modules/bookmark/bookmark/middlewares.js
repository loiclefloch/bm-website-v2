import { createMiddleware } from 'reacticoon/middleware'
import { redirectToBookmark } from './actions'
import { redirectTo } from 'reacticoon/routing'

export const redirectToBookmarkMiddleware = createMiddleware(
  'redirectToBookmarkMiddleware',
  redirectToBookmark,
  ({ action, dispatch }) => {
    dispatch(redirectTo(action.data.route, action.data.params))
  }
)
