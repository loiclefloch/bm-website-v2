import Immutable from 'immutable'

/*
 * create a reducer.
 * 
 * @param initialState
 * @param fnMap: object with:
 *      - key: the action type
 *      - value: function (state, action)
 * 
 */
const createReducer = (initialState, fnMap) => (state = Immutable.fromJS(initialState), action) => {
  const handler = fnMap[action.type]

  return handler ? handler(state, action) : state
}

export default createReducer
