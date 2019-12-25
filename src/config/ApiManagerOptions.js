import _ from 'lodash'

import { getEnvVar } from 'reacticoon/environment'
import { getCookie } from 'reacticoon/storage'
import { getStore } from 'reacticoon/store'

function getAuthorizationHeader(state) {
  let entities = state
  if (!_.isNil(entities) && !_.isNil(entities.oauth)) {
    let accessToken = entities.oauth.getIn('accessToken'.split('.'))
    if (!_.isEmpty(accessToken)) {
      return 'Bearer ' + accessToken
    } else {
      return `Bearer ${getCookie('token')}`
    }
  }

  return null
}

const ApiManagerOptions = () => ({
  apiUrl: getEnvVar('API_URL'),

  store: null,

  headersMiddleware: () => {
    const headers = {
      Accept: 'application/json',
    }

    const authorization = getAuthorizationHeader(getStore().getState())
    if (!_.isEmpty(authorization)) {
      headers['Authorization'] = authorization
    }

    return headers
  },

  errorMiddleware: (error, res) => {
    if (_.isNil(res)) {
      return false
    }

    if (res.statusCode === 401) {
      console.error('[API] 401, redirect to login')

      // TODO
      return true
    }

    // if (res.statusCode === 500) {
    //   Logger.error('API 500', res)
    //
    //   // TODO: redirect to error page
    //   return true
    // }

    return false
  },
})

export default ApiManagerOptions
