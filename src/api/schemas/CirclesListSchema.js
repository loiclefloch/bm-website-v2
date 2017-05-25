import { schema } from 'normalizr'

import CircleSchema from './CircleSchema'
import PagingSchema from './PagingSchema'

const CirclesListSchema = new schema.Values({
  paging: PagingSchema,
  bookmarks: new schema.Array(CircleSchema),
})

export default CirclesListSchema
