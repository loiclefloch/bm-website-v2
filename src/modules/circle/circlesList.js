import Immutable from "immutable"

import createApiCallAction from 'reacticoon/action/createApiCallAction'

import CircleApi from '../../api/CircleApi'

//
// Actions
//

export const loadCircles = createApiCallAction(
  'CIRCLES::GET',
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
    case loadCircles.REQUEST:
      return state.merge({
        isFetching: true,
        error: null
      })

    case loadCircles.SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case loadCircles.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
