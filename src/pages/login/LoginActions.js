import { createApiCallAction } from '../../actions/creators'
import UserApi from '../../api/UserApi'

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
