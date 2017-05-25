import { createSelector } from 'reselect'

import isEmpty from 'lodash/isEmpty'

import { formatCircle } from '../../../modules/circle/utils'

//
// Circles
//

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
  [ getCircles ],
  (circles) => {
    return circles
    // .filter(circle => {
    //   return true
    // })
    .map(circle => {
      return formatCircle(circle.toJS())
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
