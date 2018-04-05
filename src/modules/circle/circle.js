import Immutable from "immutable"

import isNil from 'lodash/isNil'
import { push } from 'react-router-redux'
import createApiCallAction from '../../modules/reacticoon/action/createApiCallAction'
import { createSelector } from 'reselect'
import {
  formatCircle,
  setCircleIsFollowedByMe,
  setCircleIsAdministrateByMe,
} from './utils'

import CircleApi from '../../api/CircleApi'
import RoutingEnum from '../../config/RoutingEnum'

import {
  getMeCirclesIds,
  getMeAdministratedCirclesIds
} from './selectors'

//
// Actions
//

const redirectToCircle = circleId => (dispatch, getState) => {
  return dispatch(push(RoutingEnum.CIRCLE.generatePathWithParams({ circleId })))
}

export const fetchCircle = createApiCallAction(
  'CIRCLE::GET',
  circleId => CircleApi.getCircle(circleId)
)

/**
 *
 * @param  Circle|string circle either the circle or the circle.id
 */
export const showCircle = circle => (dispatch, getState) => {
  const circleId = isNil(circle.id) ? circle : circle.id
  return dispatch(redirectToCircle(circleId))
}


//
// Selectors
//

const getCircleIsFetching = (state) => state.entities.circle.get('isFetching')
const getCircles = (state) => state.entities.circle.get('list')

export const isFetchingCircle = createSelector(
    getCircleIsFetching,
    (isFetching) => isFetching
)

const getCircleIdOnProps = (state, props) => props.routeParams.circleId


export const makeGetCircle = () => {
    return createSelector(
      [ getCircleIdOnProps, getCircles, getMeCirclesIds, getMeAdministratedCirclesIds ],
      (circleId, list, meCirclesIds, meAdministratedCirclesIds) => {
        let circle = list.get(circleId)
        if (isNil(circle)) {
          return null
        }
        circle = formatCircle(circle.toJS())
        circle = setCircleIsFollowedByMe(circle, meCirclesIds)
        circle = setCircleIsAdministrateByMe(circle, meAdministratedCirclesIds)
        return circle
      }
    )
}

//
// Reducer
//

const DEFAULT = Immutable.fromJS({
  list: {
  },
  isFetching: false,
  lastUpdated: null,
  error: null
})

export const circle = (state = DEFAULT, action) => {
  switch (action.type) {
    case fetchCircle.REQUEST:
      return state.merge({
        isFetching: true,
        error: null,
        data: action.circle,
      })

    case fetchCircle.SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        list: state.get('list').merge(action.response.entities.circles),
        lastUpdated: Date.now(),
      })

    // case POST_CIRCLE_SUCCESS:
    //   const newCircle = action.response.result
    //   return state.merge({
    //     list: state.get('list').add(newCircle),
    //   })

    case fetchCircle.FAILURE:
      return state.merge({
        isFetching: false,
        error: action.apiError,
      })

    default:
      return state
  }
}
