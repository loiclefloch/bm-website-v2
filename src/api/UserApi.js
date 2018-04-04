import ApiEndpoints from './ApiEndpoints'
import Config from '../config/Config'

import OAuthSchema from './schemas/OAuthSchema'
import UserSchema from './schemas/UserSchema'
import MeSchema from './schemas/MeSchema'

const UserApi = {

  login: (username, password) => {
    return {
      type: 'POST',
      url: Config.SERVER_URL,
      schema: OAuthSchema,
      endpoint: ApiEndpoints.LOGIN,
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: Config.Auth.grant_type,
        client_id: Config.Auth.client_id,
        client_secret: Config.Auth.client_secret,
        username,
        password,
      }
    }
  },

  getMe: () => {
    return {
      type: 'GET',
      schema: MeSchema,
      endpoint: ApiEndpoints.ME,
    }
  },

  getUser: (id) => {
    return {
      type: 'GET',
      schema: UserSchema,
      endpoint: ApiEndpoints.USER,
    }
  }

}

export default UserApi
