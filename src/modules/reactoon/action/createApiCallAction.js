import isFunction from 'lodash/isFunction'

import { API_CALL, TYPES, REQUEST, DATA } from '../api/constants'

const getData = (data, params) => (isFunction(data) ? data.apply(null, params) : data)

/**
 * 
 * @param {*} type ex: 'POST::BOOOKMARK'
 * @param {*} request api call or function. Function will receive arguments sent to the action
 * @param {*} data object or function. Function will receive arguments sent to the action
 */
const createApiCallAction = (type, request, data = null) => {
  const func = (...params) => {
    const action = {
      [API_CALL]: {
        [TYPES]: [`${type}::REQUEST`, `${type}::SUCCESS`, `${type}::FAILURE`],
        [REQUEST]: getData(request, params),
        [DATA]: getData(request, params),
      },
    }

    return action
  }

  //
  // add constants to the function. Allow to access constants via the action.
  // Ex: myAction.REQUEST
  // Used on middlewares and reducers
  //
  func.REQUEST = `${type}::REQUEST`
  func.SUCCESS = `${type}::SUCCESS`
  func.FAILURE = `${type}::FAILURE`

  return func
}

export default createApiCallAction
