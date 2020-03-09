import Immutable from 'immutable'

import { loadCircles } from './actions'

const DEFAULT = Immutable.fromJS({
  data: {
    circles: {},
    paging: null,
  },
  isPending: false,
  lastUpdated: null,
  error: null,
})

const circlesListReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case loadCircles.REQUEST:
      return state.merge({
        isPending: true,
        error: null,
      })

    case loadCircles.SUCCESS:
      return state.merge({
        isPending: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case loadCircles.FAILURE:
      return state.merge({
        isPending: false,
        error: action.apiError,
      })

    default:
      return state
  }
}

export default circlesListReducer
