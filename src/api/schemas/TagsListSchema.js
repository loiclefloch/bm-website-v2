import { schema } from 'normalizr'

import TagSchema from './TagSchema'
import PagingSchema from './PagingSchema'

const TagsListSchema = new schema.Object({
  tags: new schema.Array(TagSchema),
  paging: PagingSchema,
})

export default TagsListSchema
