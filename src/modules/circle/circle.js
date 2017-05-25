import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import CircleApi from '../../api/CircleApi'

//
// Actions
//

export const CIRCLE_REQUEST = 'CIRCLE::REQUEST'
export const CIRCLE_SUCCESS = 'CIRCLE::SUCCESS'
export const CIRCLE_FAILURE = 'CIRCLE::FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchCircle = (circle) => createApiCallAction(
  [
    CIRCLE_REQUEST, CIRCLE_SUCCESS, CIRCLE_FAILURE
  ],
  CircleApi.getCircle(circle.id)
)

export const showCircle = circle => (dispatch, getState) => {
  return dispatch(fetchCircle(circle))
}

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    circle: {},
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const circle = (state = DEFAULT, action) => {
  switch (action.type) {
    case CIRCLE_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.circle,
      })

    case CIRCLE_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case CIRCLE_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.response.result,
      })

    default:
      return state
  }
}
