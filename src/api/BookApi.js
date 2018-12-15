import ApiEndpoints from './ApiEndpoints'

import BooksListSchema from './schemas/BooksListSchema'
// import BookSchema from './schemas/BookSchema'

const BookApi = {
  // TODO: Constants
  getBooks: (circleId, page = 1, limit = 30) => ({
    type: 'GET',
    schema: BooksListSchema,
    endpoint: ApiEndpoints.BOOKS,
    params: {
      circleId,
    },
  }),

  getBook: (circleId, bookId: string) => ({
    type: 'GET',
    // schema: BookSchema,
    endpoint: ApiEndpoints.BOOK,
    params: {
      circleId,
      bookId,
    },
  }),

  post: (circleId, book) => ({
    type: 'POST',
    endpoint: ApiEndpoints.BOOKS,
    params: {
      circleId,
    },
    body: { name: book.name, description: book.description },
  }),
}

export default BookApi
