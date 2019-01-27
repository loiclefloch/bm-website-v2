import isNil from 'lodash/isNil'
import { createAction, createApiCallAction } from 'reacticoon/action'
import { redirectTo } from 'reacticoon/routing'
import CircleApi from 'app/api/CircleApi'
import RoutingEnum from 'app/config/RoutingEnum'


const redirectToCircle = circleId => (dispatch, getState) => {
  return dispatch(redirectTo(RoutingEnum.CIRCLE.generatePathWithParams({ circleId })))
}

export const fetchCircle = createApiCallAction('CIRCLE::GET', circleId =>
  CircleApi.getCircle(circleId)
)

export const updatedCircle = createAction('CIRCLE::UPDATE', circle => ({
  circle,
}))

/**
 *
 * @param  Circle|string circle either the circle or the circle.id
 */
export const showCircle = circle => (dispatch, getState) => {
  const circleId = isNil(circle.id) ? circle : circle.id
  return dispatch(redirectToCircle(circleId))
}
