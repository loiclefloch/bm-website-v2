import Immutable from "immutable"
import { createSelector } from 'reselect'
import { formatTag } from './utils'
import createApiCallAction from '../../modules/reactoon/action/createApiCallAction'

import TagApi from '../../api/TagApi'
import merge from 'lodash/merge'

//
// Actions
//

export const fetchMeTags = createApiCallAction(
  'TAGS::FETCH',
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
// Fetching bookmarksList
//

const getTagsIsFetching = (state) => state.entities.tagsList.get('isFetching')

export const isFetchingTags = createSelector(
    getTagsIsFetching,
    (isFetching) => isFetching
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
    case fetchMeTags.REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
      })

    case fetchMeTags.SUCCESS:
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

    case fetchMeTags.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
