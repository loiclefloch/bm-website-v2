import Immutable from "immutable"

import createApiCallAction from '../../modules/redux/createApiCallAction'

import UserApi from '../../api/UserApi'

//
// Actions
//

export const fetchMe = createApiCallAction(
  'ME::FETCH',
  UserApi.getMe()
)

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
    circles: {},
    circlesAdmin: {},
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const me = (state = DEFAULT, action) => {
  switch (action.type) {
    case fetchMe.REQUEST:
      return state.merge({
        isFetching: true,
        error: null
      })

    case fetchMe.SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case fetchMe.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
