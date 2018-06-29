import ApiEndpoints from './ApiEndpoints'
import Config from '../config/Config'

import CirclesListSchema from './schemas/CirclesListSchema'
import CircleSchema from './schemas/CircleSchema'

const CircleApi = {
  // TODO: Constants
  getCircles: (page = 1, limit = 30) => ({
    type: 'GET',
    schema: CirclesListSchema,
    endpoint: ApiEndpoints.CIRCLES,
  }),

  getCircle: (circleId: string) => ({
    type: 'GET',
    schema: CircleSchema,
    endpoint: ApiEndpoints.CIRCLE,
    params: {
      circleId,
    },
  }),

  post: circle => ({
    type: 'POST',
    endpoint: ApiEndpoints.CIRCLES,
    params: {},
    body: { name: circle.name, description: circle.description },
  }),
}

export default CircleApi
