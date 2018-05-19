import _ from 'lodash'

import Config from './Config'

function getAuthorizationHeader(state) {
  let entities = state.entities
  if (!_.isNil(entities) && !_.isNil(entities.oauth)) {
    let accessToken = entities.oauth.getIn('accessToken'.split('.'))
    if (!_.isEmpty(accessToken)) {
      return 'Bearer ' + accessToken
    } else {
      return 'Bearer OTcwMDQ0MDE0ZDEzYjE1ZGRkYmUyOTMxYmI4NzI2NDgyODM2MDJhNDVkMThjYzAzNjRhY2E1MWIxMjU5NmUzNQ'
    }
  }

  return null
}

export default {
  apiUrl: Config.API_URL,

  store: null,

  headersMiddleware: () => {
    const headers = {
      Accept: 'application/json',
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
  },
}
