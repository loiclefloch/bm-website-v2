import { schema } from 'normalizr'

const BookmarkSchema = new schema.Entity('bookmarks', {}, {
  idAttribute: value => value.id
})

export default BookmarkSchema
