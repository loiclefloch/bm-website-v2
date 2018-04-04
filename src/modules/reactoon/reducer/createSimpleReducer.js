import Immutable from 'immutable'
import invariant from 'invariant'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'

/**
 * Generate a simple reducer with basic REQUEST / SUCCESS / FAILURE
 * @param  {string} actionType  Action to be reduced
 * @return {Immutable}          Updated state
 */

const DEFAULT_STATE = Immutable.fromJS({
  data: null,
  isFetching: false,
  error: null,
})

const createSimpleReducer = (actionType, reducer: Function = null) => (state = DEFAULT_STATE, action) => {

  switch (action.type) {

    case actionType.REQUEST:
      return state.merge({
        data: null,
        isFetching: true,
        error: null,
      })

    case actionType.SUCCESS:
      return state.merge({
        data: action.response,
        isFetching: false,
        error: null,
      })

    case actionType.FAILURE:
      return state.merge({
        data: null,
        isFetching: false,
        error: action.error,
      })

    default:
      if  (reducer !== null) {
        invariant(isFunction(reducer), 'reducer must be a function')
        const res = reducer(state, action)
        invariant(!isUndefined(res), 'reducer returned undefined')
        return res
      }
      return state
  }
}

export default createSimpleReducer
