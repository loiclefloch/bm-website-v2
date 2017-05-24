import Immutable from "immutable"

import { LOGIN_SUCCESS } from './LoginActions'

const DEFAULT_OAUTH = Immutable.fromJS({})

export const oauth = (state = DEFAULT_OAUTH, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.merge(action.response.result)
      break

    default:
      return state
  }
}
