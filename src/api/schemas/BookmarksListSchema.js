import { schema } from 'normalizr'

import BookmarkSchema from './BookmarkSchema'
import PagingSchema from './PagingSchema'

const BookmarksListSchema = new schema.Object({
  bookmarks: new schema.Array(BookmarkSchema),
  paging: PagingSchema,
})

export default BookmarksListSchema
