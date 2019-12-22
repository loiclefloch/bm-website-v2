import map from 'lodash/map'

import { formatTag } from '../../tag/utils'

export const formatTags = bookmark => {
  bookmark.tags = map(bookmark.tags, tag => {
    return formatTag(tag)
  })
}
