import { schema } from 'normalizr'

const PagingSchema = new schema.Entity('pagination', {}, {
  idAttribute: value => value.page,
})

export default PagingSchema
