import { createApiCallAction } from '../../actions/creators'
import UserApi from '../../api/UserApi'
import Immutable from "immutable"

//
// actions
//

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// Login on the api
export const login = (username, password) => createApiCallAction(
  [
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
  ],
  UserApi.login(username, password)
)

//
// Reducer
//

const DEFAULT_OAUTH = Immutable.fromJS({
  isFetching: false,
})

export const oauth = (state = DEFAULT_OAUTH, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.merge({
        isFetching: true,
      })
      return state

    case LOGIN_SUCCESS:
      state = state.merge(action.response.result)
      state = state.merge({
        isFetching: false,
      })
      return state

    case LOGIN_FAILURE:
      state = state.merge(action.response.result)
      state = state.merge({
        isFetching: false,
      })
      return state

    default:
      return state
  }
}
