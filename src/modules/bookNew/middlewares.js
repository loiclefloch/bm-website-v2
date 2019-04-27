import { createMiddleware } from 'reacticoon/middleware'
import { redirectTo } from 'reacticoon/routing'
import { addInfoFlashMessage } from 'app/reacticoon-plugins/reacticoon-flash-messages/src/service'
import { postBook } from './actions'
import { getRoute } from 'reacticoon/routing'

const createdBookMiddleware = createMiddleware(
  'createdBookMiddleware',
  postBook.SUCCESS,
  ({ dispatch, action }) => {
    addInfoFlashMessage({
      text: 'Book created',
    })

    dispatch(
      redirectTo(getRoute('BOOK'), {
        circleId: action.response.owner.id,
        bookId: action.response.id,
      })
    )
  }
)

export default createdBookMiddleware
