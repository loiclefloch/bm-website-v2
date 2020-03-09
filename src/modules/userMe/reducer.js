import Immutable from 'immutable'

import { createReducer } from 'reacticoon/reducer'

import { fetchMe } from './actions'

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    circles: {},
    circlesAdmin: {},
  },
  isPending: false,
  lastUpdated: null,
  error: null,
})

export default createReducer(DEFAULT, {
  [fetchMe.REQUEST]: (state, action) =>
    state.merge({
      isPending: true,
      error: null,
    }),
  [fetchMe.SUCCESS]: (state, action) =>
    state.merge({
      isPending: false,
      error: null,
      data: action.response.result,
      lastUpdated: Date.now(),
    }),
  [fetchMe.FAILURE]: (state, action) =>
    state.merge({
      isPending: false,
      error: action.apiError,
    }),
})
