import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import UserApi from '../../api/UserApi'

//
// Actions
//

export const ME_REQUEST = 'ME::REQUEST'
export const ME_SUCCESS = 'ME::SUCCESS'
export const ME_FAILURE = 'ME::FAILURE'


export const fetchMe = () => createApiCallAction(
  [
    ME_REQUEST, ME_SUCCESS, ME_FAILURE
  ],
  UserApi.getMe()
)

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  data: {
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const me = (state = DEFAULT, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.me,
      })

    case ME_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case ME_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
