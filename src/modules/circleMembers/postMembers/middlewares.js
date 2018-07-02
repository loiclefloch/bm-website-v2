import { createMiddleware } from 'reacticoon/middleware'
import { updatedCircle } from 'modules/circle'
import { postCircleMembers } from './actions'

export const postCircleMembersSuccess = createMiddleware(
  'postCircleMembersSuccess',
  postCircleMembers.SUCCESS,
  ({ dispatch, action }) => {
    dispatch(updatedCircle(action.response))
  }
)
