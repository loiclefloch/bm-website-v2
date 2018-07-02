import { createMiddleware } from 'reacticoon/middleware'
import { redirectTo } from 'reacticoon/routing'
import { postBook } from './actions'
import { getRoute } from '../reacticoon/routing/config'

const createdBookMiddleware = createMiddleware(
  'createdBookMiddleware',
  postBook.SUCCESS,
  ({ dispatch, action }) => {
    dispatch(
      redirectTo(getRoute('BOOK'), {
        circleId: action.response.owner.id,
        bookId: action.response.id,
      })
    )
  }
)

export default createdBookMiddleware
