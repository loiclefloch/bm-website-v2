import { createMiddleware } from 'reacticoon/middleware'
import { redirectTo } from 'reacticoon/routing'
import { postCircle } from './actions'
import { getRoute } from '../reacticoon/routing/config'

const createdCircleMiddleware = createMiddleware(
  'createdCircleMiddleware',
  postCircle.SUCCESS,
  ({ dispatch, action }) => {
    dispatch(
      redirectTo(getRoute('CIRCLE'), {
        circleId: action.response.id,
      })
    )
  }
)

export default createdCircleMiddleware
