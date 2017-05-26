import { createSelector } from 'reselect'
import values from 'lodash/values'

import {
  formatCircle,
  setCircleIsFollowedByMe,
  setCircleIsAdministrateByMe,
} from './utils'

import { getMe } from '../user'

//
// Circles
//

const getMeCirclesIds = createSelector(
  getMe,
  (me) => {
    return values(me.circles).map((circle) => { return circle.id })
  }
)

const getMeAdministratedCirclesIds = createSelector(
  getMe,
  (me) => {
    return values(me.circlesAdmin).map((circle) => { return circle.id })
  }
)

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getCirclesMap = (state) => state.entities.circlesList.getIn([ 'data', 'circles' ])

// memoized selector. It takes getCirclesMap as input-selectors, and a transform function that
// calculates the data
const getCircles = createSelector(
  getCirclesMap,
  (resultMap) => resultMap && resultMap.toArray()
);

export const getCirclesAsList = createSelector(
  [ getCircles, getMeCirclesIds, getMeAdministratedCirclesIds ],
  (circles, meCirclesIds, meAdministratedCirclesIds) => {
    return circles
    // .filter(circle => {
    //   return true
    // })
    .map(circle => {
      circle = formatCircle(circle.toJS())
      circle = setCircleIsFollowedByMe(circle, meCirclesIds)
      circle = setCircleIsAdministrateByMe(circle, meAdministratedCirclesIds)
      return circle
    })

  }
)

export const getFollowedCircles = createSelector(
    [ getCirclesAsList, getMeCirclesIds ],
    (circles, meCirclesIds) => circles.map(circle => {
      return circle.isFollowedByMe
    })
)

//
// Fetching circlesList
//

const getCirclesIsFetching = (state) => state.entities.circlesList.get('isFetching')

export const isFetchingCircles = createSelector(
    getCirclesIsFetching,
    (isFetching) => isFetching
)
