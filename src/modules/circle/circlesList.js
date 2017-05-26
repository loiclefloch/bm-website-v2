import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import CircleApi from '../../api/CircleApi'

//
// Actions
//

export const CIRCLES_REQUEST = 'CIRCLES::REQUEST'
export const CIRCLES_SUCCESS = 'CIRCLES::SUCCESS'
export const CIRCLES_FAILURE = 'CIRCLES::FAILURE'

// Login on the api
export const loadCircles = () => createApiCallAction(
  [
    CIRCLES_REQUEST, CIRCLES_SUCCESS, CIRCLES_FAILURE
  ],
  CircleApi.getCircles()
)

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    circles: {},
    paging: null,
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const circlesList = (state = DEFAULT, action) => {
  switch (action.type) {
    case CIRCLES_REQUEST:
      return state.merge({
        isFetching: true,
        error: null
      })

    case CIRCLES_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case CIRCLES_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
