import createApiCallAction from 'reacticoon/action/createApiCallAction'

import CircleApi from 'app/api/CircleApi'

export const postCircleMembers = createApiCallAction('CIRCLE::MEMBERS::POST', (circleId, members) =>
  CircleApi.postMembers(circleId, members)
)
