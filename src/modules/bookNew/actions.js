import createApiCallAction from 'reacticoon/action/createApiCallAction'

import BookApi from 'app/api/BookApi'

export const postBook = createApiCallAction('Book::POST', (circleId, book) =>
  BookApi.post(circleId, book)
)
