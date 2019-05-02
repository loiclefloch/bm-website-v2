import ApiEndpoints from './ApiEndpoints'
import { getEnvVar } from 'reacticoon/environment'

import OAuthSchema from './schemas/OAuthSchema'
import UserSchema from './schemas/UserSchema'
import MeSchema from './schemas/MeSchema'

const UserApi = {
  login: (username, password) => ({
    type: 'POST',
    url: getEnvVar('SERVER_URL'),
    schema: OAuthSchema,
    endpoint: ApiEndpoints.LOGIN,
    headers: {
      Accept: 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: getEnvVar('Auth').grant_type,
      client_id: getEnvVar('Auth').client_id,
      client_secret: getEnvVar('Auth').client_secret,
      username,
      password,
    },
  }),

  getMe: () => ({
    type: 'GET',
    schema: MeSchema,
    endpoint: ApiEndpoints.ME,
  }),

  getUser: id => ({
    type: 'GET',
    schema: UserSchema,
    endpoint: ApiEndpoints.USER,
  }),

  getUserList: () => ({
    type: 'GET',
    endpoint: ApiEndpoints.USERS,
  }),
}

export default UserApi
