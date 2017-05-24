import { schema } from 'normalizr'

import BookmarkSchema from './BookmarkSchema'
import PagingSchema from './PagingSchema'

const BookmarksListSchema = new schema.Values({
  paging: PagingSchema,
  bookmarks: new schema.Array(BookmarkSchema),
})

export default BookmarksListSchema
