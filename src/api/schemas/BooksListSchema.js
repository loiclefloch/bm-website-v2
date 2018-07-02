import { schema } from 'normalizr'

import BookSchema from './BookSchema'
import PagingSchema from './PagingSchema'

const BooksListSchema = new schema.Values({
  paging: PagingSchema,
  books: new schema.Array(BookSchema),
})

export default BooksListSchema
