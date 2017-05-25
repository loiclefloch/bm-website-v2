import { createSelector } from 'reselect'

import isEmpty from 'lodash/isEmpty'
import ArrayUtils from '../../../utils/ArrayUtils'

import {
  formatCircle,
  setCircleIsFollowedByMe
} from '../../../modules/circle/utils'

//
// Circles
//

const getMeCirclesIds = (state) => {
  // TODO
  return [ 2 ]
}

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
  [ getCircles, getMeCirclesIds ],
  (circles, meCirclesIds) => {
    return circles
    // .filter(circle => {
    //   return true
    // })
    .map(circle => {
      circle = formatCircle(circle.toJS())
      circle = setCircleIsFollowedByMe(circle, meCirclesIds)
      return circle
    })

  }
)

export const getCirclesSortedByDate = createSelector(
  [ getCirclesAsList ],
  (circles) => {
    return circles.sort((a, b) => {
      return b.id - a.id // TODO: createdAt
    })
  }
)

//
// Fetching circlesList
//

const getCirclesIsFetching = (state) => state.entities.circlesList.get('isFetching')

export const isFetchingCircles = createSelector(
    getCirclesIsFetching,
    (isFetching) => isFetching
)


//
//
//

export const getFollowedCircles = createSelector(
    [ getCirclesAsList, getMeCirclesIds ],
    (circles, meCirclesIds) => circles.map(circle => {
      return circle.isFollowedByMe
    })
)
