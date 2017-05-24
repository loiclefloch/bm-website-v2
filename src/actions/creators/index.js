import { API_CALL, TYPES, REQUEST } from '../../middleware/api'

export const createApiCallAction = (types, request) => {
  return {
    [API_CALL]: {
      [TYPES]: types,
      [REQUEST]: request
    }
  }
}
