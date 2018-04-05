import Immutable from "immutable"

import createApiCallAction from '../../modules/reacticoon/action/createApiCallAction'

import UserApi from '../../api/UserApi'

//
// Actions
//

const fetchUser = createApiCallAction(
  'USER::FETCH',
  user => UserApi.getUser(user.id)
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
    case fetchUser.REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.user,
      })

    case fetchUser.SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: action.response.result,
        lastUpdated: Date.now(),
      })

    case fetchUser.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
