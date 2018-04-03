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
      return 'Bearer NTY0MmNhZjY3YjliOWQ2NTVmNTNjNmU5M2JiYjI4ZDA5YTM1ZDc1Y2Q0NWZhMzdkNWRjYjZhOTI0N2VjZDllMw'
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
