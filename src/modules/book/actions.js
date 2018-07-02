import { createApiCallAction } from 'reacticoon/action'
import BookApi from 'app/api/BookApi'

//
// Actions
//

export const fetchBook = createApiCallAction('BOOK::GET', (circleId, bookId) =>
  BookApi.getBook(circleId, bookId)
)
