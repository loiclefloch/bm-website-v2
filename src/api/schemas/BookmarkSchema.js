import { schema } from 'normalizr'

import TagSchema from './TagSchema'

const BookmarkSchema = new schema.Entity('bookmarks', {}, {
  idAttribute: value => value.id,
  tags: TagSchema,
})

export default BookmarkSchema
