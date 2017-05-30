import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'
// import Immutable from 'immutable'

import ApiManager from '../api/ApiManager'
import Logger from '../utils/Logger'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (request, schema) => {
  return new Promise(
    (resolve, reject) => {
      const success = (json) => {
        const camelizedJson = camelizeKeys(json)

        const data = Object.assign({},
          normalize(camelizedJson, schema),
        )

        resolve(data)
        // resolve(Immutable.fromJs(data))
      }

      const failure = (json) => {
        reject(json)
      }

      const { type } = request

      request.success = success
      request.failure = failure

      console.log('apiCall', request)

      switch (type) {
        case 'GET':
        ApiManager.get(request)
        break
        case 'POST':
        ApiManager.post(request)
        break
        case 'UPDATE':
        ApiManager.update(request)
        break
        case 'DELETE':
        ApiManager.delete(request)
        break
        default:
        Logger.error('api', `unknown type ${type}`)
      }
    }
  );
}

// Action key that carries API call info interpreted by this Redux middleware.
// The data have to be formatted like:
// {
//  TYPES: {},
//  REQUEST: {}
// }
//
//
//
export const API_CALL = 'apiCall'

//
// The constants to attach to the actions
// have to contains three values: [ requestType, successType, failureType ]
// Example: types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ]
// Have to be set on API_CALL
export const TYPES = 'TYPES'

//  REQUEST: {
//   type: 'GET',
//   schema: OAuthSchema,
//   endpoint: ApiEndpoints.LOGIN,
//   headers: {
//     'Accept': 'application/x-www-form-urlencoded',
//   },
//   data: {
//   }
//   }
//
// See api/UserApi.login for example
export const REQUEST = 'REQUEST'

// A Redux middleware that interprets actions with API_CALL info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const apiCall = action[API_CALL]

  if (typeof apiCall === 'undefined') {
    return next(action)
  }

  const request = apiCall[REQUEST]
  const types = apiCall[TYPES]

  let { endpoint } = request

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  const { schema } = request

  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[API_CALL]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({
    type: requestType,
    request: request,
  }))

  return callApi(request, schema)
  .then(
    response => next(
      actionWith(
        {
          type: successType,
          response,
        }
      )
    )
  )
  .catch(
    apiError => next(
      actionWith(
        {
          type: failureType,
          apiError,
        }
      )
    )
  )
}
