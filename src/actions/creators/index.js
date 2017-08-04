import { API_CALL, TYPES, REQUEST, DATA } from '../../middleware/api'

export const createApiCallAction = (types, request, data = null) => {
  return {
    [API_CALL]: {
      [TYPES]: types,
      [REQUEST]: request,
      [DATA]: data,
    }
  }
}
