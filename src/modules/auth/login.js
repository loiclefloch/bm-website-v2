import createApiCallAction from '../../modules/reactoon/action/createApiCallAction'
import UserApi from '../../api/UserApi'
import Immutable from "immutable"

//
// actions
//
// Login on the api
export const login = createApiCallAction(
  'LOGIN',
  (username, password) => UserApi.login(username, password)
)

//
// Reducer
//

const DEFAULT_OAUTH = Immutable.fromJS({
  isFetching: false,
})

export const oauth = (state = DEFAULT_OAUTH, action) => {
  switch (action.type) {
    case login.REQUEST:
      return state.merge({
        isFetching: true,
      })

    case login.SUCCESS:
      state = state.merge(action.response.result)
      state = state.merge({
        isFetching: false,
      })
      return state

    case login.FAILURE:
      state = state.merge(action.response.result)
      state = state.merge({
        isFetching: false,
      })
      return state

    default:
      return state
  }
}
