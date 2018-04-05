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

    return dispatch({
      type,
      ...(isFunction(data) ? data.apply(null, params) : data),
    })
  }

  //
  // no actions types to define, we just use action.TYPE
  //
  // - toString allow to make easier the debug of the action
  //

  actionCreator.TYPE = type
  actionCreator.toString = () => type

  return actionCreator
}

export default createAction
