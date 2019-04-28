import { createMiddleware } from 'reacticoon/middleware'
import { EventManager } from 'reacticoon/event'

import { fetchMe } from './actions'

export const onFetchMeSuccessMiddleware = createMiddleware(
  'onFetchMeSuccessMiddleware',
  fetchMe.SUCCESS,
  ({ action }) => {
    const user = action.response.result
    EventManager.dispatch(EventManager.Event.SET_USER_CONTEXT, {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
    })
  }
)
