import { createMiddleware } from 'reacticoon/middleware'
import { redirectTo } from 'reacticoon/routing'
import { addInfoFlashMessage } from 'reacticoon-plugins/reacticoon-flash-messages/src/service'
import { postCircle } from './actions'
import { getRoute } from 'reacticoon/routing'

export const createdCircleMiddleware = createMiddleware(
  'createdCircleMiddleware',
  postCircle.SUCCESS,
  ({ dispatch, action }) => {
    addInfoFlashMessage({
      text: 'Circle created',
    })

    dispatch(
      redirectTo(getRoute('CIRCLE'), {
        circleId: action.response.id,
      })
    )
  }
)
