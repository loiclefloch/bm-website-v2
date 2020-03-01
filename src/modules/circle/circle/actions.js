import { createAction, createApiCallAction } from 'reacticoon/action'
import CircleApi from 'app/api/CircleApi'

export const fetchCircle = createApiCallAction('CIRCLE::GET', circleId =>
  CircleApi.getCircle(circleId)
)

export const updatedCircle = createAction('CIRCLE::UPDATE', circle => ({
  circle,
}))
