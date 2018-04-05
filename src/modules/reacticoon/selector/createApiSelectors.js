import isNil from 'lodash/isNil'
import { createSelector } from 'reselect'

/**
 * Generate a simple selector with basic isFetching / getData / getErrors
 * @param  {function} getState  Function to retrieve entity from state
 *                              state => state.entities.ENTITY_NAME
 * @param  {function} formatData  Callback function to format data on `getData`
 * @return {object}             Object with 3 selectors
 *                              isFetching / getData / getErrors
 * 
 * ```javascript
 * const userSelectors = createApiSelectors(state => state.entities.user)
 * 
 * export const isFetchingUser = userSelectors.isFetching
 * export const getUserData = userSelectors.getData
 * export const getUserError = userSelectors.getError
 * 
 * ```
 * 
 */
const createApiSelectors = (getState, formatData = null) => ({

  isFetching: createSelector(
    [ getState ],
    dataState => isNil(dataState) ? false : dataState.get('isFetching') || false
  ),

  getData: createSelector(
    [ getState ],
    (dataState) => {
      if (isNil(dataState)) {
        return null
      }

      const data = dataState.get('data')

      if (isNil(data)) {
        return null
      }

      return formatData !== null && typeof formatData === 'function'
        ? formatData(data.toJS())
        : data.toJS()
    }
  ),

  getError: createSelector(
    [ getState ],
    (dataState) => {
      if (isNil(dataState)) {
        return null
      }

      const error = dataState.get('error')

      if (isNil(error)) {
        return null
      }

      return error.toJS()
    }
  ),

})

export default createApiSelectors
