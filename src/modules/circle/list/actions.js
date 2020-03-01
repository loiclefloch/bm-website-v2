import { createAction, createApiCallAction } from 'reacticoon/action'
import isNil from 'lodash/isNil'

import CircleApi from 'app/api/CircleApi'
import { redirectTo } from 'reacticoon/routing'
import RoutingEnum from 'app/config/RoutingEnum'

export const redirectToCircle = createAction('CIRCLE::REDIRECT_TO', (circleId, { dispatch }) =>
  dispatch(redirectTo(RoutingEnum.CIRCLE.generatePathWithParams({ circleId })))
)

export const loadCircles = createApiCallAction('CIRCLES::GET', CircleApi.getCircles())

/**
 *
 * @param  Circle|string circle either the circle or the circle.id
 */
export const showCircle = createAction('CIRCLE::SHOW', (circle, { dispatch }) => {
  const circleId = isNil(circle.id) ? circle : circle.id
  return dispatch(redirectToCircle(circleId))
})
