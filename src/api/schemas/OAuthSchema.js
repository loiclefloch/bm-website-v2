import { schema } from 'normalizr'

// access_token
// expires_in
// refresh_token
// scope
// token_type

// TODO: fix
const OAuthSchema = new schema.Object('oauth', {}, {
  // see https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#entitykey-definition---options--
  idAttribute: () => 'default'
})

export default OAuthSchema
