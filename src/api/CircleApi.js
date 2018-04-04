import ApiEndpoints from './ApiEndpoints'
import Config from '../config/Config'

import CirclesListSchema from './schemas/CirclesListSchema'
import CircleSchema from './schemas/CircleSchema'

const CircleApi = {

  // TODO: Constants
  getCircles: (page = 1, limit = 30) => {
    return {
      type: 'GET',
      schema: CirclesListSchema,
      endpoint: ApiEndpoints.CIRCLES,
    }
  },

  getCircle: (circleId: string) => {
    return {
      type: 'GET',
      schema: CircleSchema,
      endpoint: ApiEndpoints.CIRCLE,
      params: {
        circleId
      }
    }
  }

}

export default CircleApi
