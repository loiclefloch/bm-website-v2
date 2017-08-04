import _ from 'lodash'

import Config from './Config'
import Logger from '../utils/Logger'

function getAuthorizationHeader(state) {
  let entities = state.entities
  if (!_.isNil(entities) && !_.isNil(entities.oauth)) {
    let accessToken = entities.oauth.getIn('accessToken'.split('.'))
    if (!_.isEmpty(accessToken)) {
      return 'Bearer ' + accessToken
    } else {
      // TODO: remove
      return 'Bearer OTgxNmJjNjI4Y2VhYzc2NGI1ZDViOTdmMjliNzE1MTEyZmI0NmVmYWFhN2I3ZGE3M2JjMzVjYWJlZDIzYTJlYQ'
    }
  }

  return null
}

export default {

  apiUrl: Config.API_URL,

  store: null,

  headersMiddleware: () => {
    const headers = {
      'Accept': 'application/json',
    }

    // TODO: why this.a ?
    const store = this.a.store
    if (!_.isNil(store)) {
      const authorization = getAuthorizationHeader(store.getState())
      if (!_.isEmpty(authorization)) {
        headers['Authorization'] = authorization
      }
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
  }

}
