import { schema } from 'normalizr'

const TagSchema = new schema.Entity('tags', {}, {
  idAttribute: value => value.id
})

export default TagSchema
