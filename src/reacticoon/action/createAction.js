import invariant from 'invariant'

import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'

const createAction = (type, data, callback = null) => {
  const actionCreator = (...params) => dispatch => {
    if (callback !== null) {
      callback()
    }

    invariant(isNil(data) || isUndefined(data.type), 'data cannot contain a type parameter')

    invariant(!isNil(type), 'type is nil')
    invariant(
      isFunction(dispatch),
      'action is not correctly initialized: const myAction = () => creatAction(...'
    )

    const payload = { ...(isFunction(data) ? data.apply(null, params) : data) }

    // TODO: follow https://github.com/redux-utilities/flux-standard-action?
    const action = {
      type,
      // TODO: remove legacy 'data'
      data: payload,
      payload,
    }

    return dispatch(action)
  }

  //
  // no actions types to define, we just use action.TYPE
  //
  // - toString allow to make easier the debug of the action
  //

  actionCreator.TYPE = type
  // requried by `isActionType`
  actionCreator.isActionType = true
  actionCreator.toString = () => type

  return actionCreator
}

export default createAction
