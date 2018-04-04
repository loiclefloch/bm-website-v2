import ApiEndpoints from './ApiEndpoints'

import TagsListSchema from './schemas/TagsListSchema'
import TagSchema from './schemas/TagSchema'
import TagAddSchema from './schemas/TagAddSchema'

const TagApi = {

  getTags: () => {
    return {
      type: 'GET',
      schema: TagsListSchema,
      endpoint: ApiEndpoints.TAGS,
    }
  },

  getTag: (tagId: string) => {
    return {
      type: 'GET',
      schema: TagSchema,
      endpoint: ApiEndpoints.TAG,
      params: {
        tagId
      }
    }
  },

  postTag: (tag) => {
    return {
      type: 'POST',
      schema: TagAddSchema,
      endpoint: ApiEndpoints.TAGS,
      data: tag,
    }
  },

  putTagTags: (tag, tags) => {
    return {
      type: 'PUT',
      schema: TagSchema,
      params: {
        tagId: tag.id,
      },
      endpoint: ApiEndpoints.TAG_TAGS,
      data: {
        tags,
      },
    }
  },

}

export default TagApi
