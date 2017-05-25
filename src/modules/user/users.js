import Immutable from "immutable"

import { createApiCallAction } from '../../actions/creators'

import UserApi from '../../api/UserApi'

//
// Actions
//

export const USER_REQUEST = 'USER::REQUEST'
export const USER_SUCCESS = 'USER::SUCCESS'
export const USER_FAILURE = 'USER::FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = (user) => createApiCallAction(
  [
    USER_REQUEST, USER_SUCCESS, USER_FAILURE
  ],
  UserApi.getUser(user.id)
)

export const showUser = user => (dispatch, getState) => {
  return dispatch(fetchUser(user))
}

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

export const users = (state = DEFAULT, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.user,
      })

    case USER_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case USER_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
