import Immutable from "immutable"

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './LoginActions'

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
