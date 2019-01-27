import Immutable from 'immutable'

import { createReducer } from 'reacticoon/reducer'
import { fetchCircle, updatedCircle } from './actions'

const DEFAULT = Immutable.fromJS({
  list: {},
  isFetching: false,
  lastUpdated: null,
  error: null,
})

const handleFetchRequest = (state, action) =>
  state.merge({
    isFetching: true,
    error: null,
    data: action.circle,
  })

const handleFetchSuccess = (state, action) =>
  state.merge({
    isFetching: false,
    error: null,
    list: state.get('list').merge(action.response.entities.circles),
    lastUpdated: Date.now(),
  })

const handleFetchFailure = (state, action) =>
  state.merge({
    isFetching: false,
    error: action.apiError,
  })

const handleupdatedCircle = (state, action) =>
  state.setIn(
    [
      'list',
      // find index
      action.payload.circle.id.toString(),
    ],
    // data to update
    Immutable.fromJS(action.payload.circle)
  )

const circleReducer = createReducer(DEFAULT, {
  [fetchCircle.REQUEST]: handleFetchRequest,
  [fetchCircle.SUCCESS]: handleFetchSuccess,
  [fetchCircle.FAILURE]: handleFetchFailure,
  [updatedCircle.TYPE]: handleupdatedCircle,
})

export default circleReducer
