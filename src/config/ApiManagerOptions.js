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
      return 'Bearer YjZmMTI0MTJmYjg5ZDQwNmI5NWQ0MGM4YTk1N2JhOTZiZDFjMGEwODQ2ZjRlMDdmMDAwNmU2NjQ2OWMyYjViYQ'
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

    console.log(this.a, this.a.store)
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

    if (res.statusCode === 500) {
      Logger.error('API 500', res)

      // TODO: redirect to error page
      return true
    }
  }

}