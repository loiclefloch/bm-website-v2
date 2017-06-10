import Immutable from "immutable"
import { createSelector } from 'reselect'
import { formatTag } from './utils'
import { createApiCallAction } from '../../actions/creators'

import TagApi from '../../api/TagApi'
import merge from 'lodash/merge'

//
// Actions
//

export const TAGS_REQUEST = 'TAGS::REQUEST'
export const TAGS_SUCCESS = 'TAGS::SUCCESS'
export const TAGS_FAILURE = 'TAGS::FAILURE'

// Login on the api
export const fetchMeTags = () => createApiCallAction(
  [
    TAGS_REQUEST, TAGS_SUCCESS, TAGS_FAILURE
  ],
  TagApi.getTags()
)

//
//
//

const getTagsData = (state) => state.entities.tagsList.getIn([ 'data' ])

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getTagsMap = (state) => state.entities.tagsList.getIn([ 'data', 'tags' ])

export const getTags = createSelector(
  getTagsMap,
  (resultMap) => resultMap
);

export const getTagsList = createSelector(
  [ getTags ],
  (tags) => {
    return tags.toArray()
    .map(tag => {
      return formatTag(tag.toJS())
    })
  }
)

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    tags: {},
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const tagsList = (state = DEFAULT, action) => {
  switch (action.type) {
    case TAGS_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case TAGS_SUCCESS:
      const oldData = state.get('data').toJS()
      const newState = state.mergeDeep({
        isFetching: false,
        error: null,
        data: {
          tags: merge({}, oldData.tags, action.response.entities.tags),
        },
        lastUpdated: Date.now(),
      })

      return newState

    case TAGS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
