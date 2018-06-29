import createApiCallAction from 'reacticoon/action/createApiCallAction'

import CircleApi from 'app/api/CircleApi'

export const postCircle = createApiCallAction('CIRCLE::POST', circle => CircleApi.post(circle))
