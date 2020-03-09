import { createApiCallAction } from 'reacticoon/action'
import Immutable from 'immutable'
import { getCookie } from 'reacticoon/storage'
import UserApi from '../../api/UserApi'

//
// actions
//
// Login on the api
export const login = createApiCallAction('LOGIN', (username, password) =>
  UserApi.login(username, password)
)

//
// Reducer
//

const DEFAULT_OAUTH = Immutable.fromJS({
  isPending: false,
  accessToken: getCookie('token'),
})

export const oauth = (state = DEFAULT_OAUTH, action) => {
  switch (action.type) {
    case login.REQUEST:
      return state.merge({
        isPending: true,
      })

    case login.SUCCESS:
      return state.merge({
        isPending: false,
        accessToken: action.response.result.accessToken,
      })

    case login.FAILURE:
      return state.merge({
        isPending: false,
      })

    default:
      return state
  }
}
