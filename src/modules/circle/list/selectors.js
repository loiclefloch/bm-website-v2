import { createSelector, createMakeSelector, getStateForModule } from 'reacticoon/selector'
import values from 'lodash/values'

import { formatCircle } from '../format'

import { getMe } from '../../userMe'

const getState = getStateForModule('App::CircleListModule')

//
// Circles
//

export const getMeCirclesIds = createSelector(getMe, me => {
  return values(me.circles).map(circle => {
    return circle.id
  })
})

export const getMeAdministratedCirclesIds = createSelector(getMe, me => {
  return values(me.circlesAdmin).map(circle => {
    return circle.id
  })
})

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getCirclesMap = createSelector([getState], state => state.getIn(['data', 'circles']))

// memoized selector. It takes getCirclesMap as input-selectors, and a transform function that
// calculates the data
const getCircles = createSelector(getCirclesMap, resultMap => resultMap && resultMap.toArray())

export const getCirclesAsList = createSelector(
  [getCircles, getMeCirclesIds, getMeAdministratedCirclesIds],
  (circles, meCirclesIds, meAdministratedCirclesIds) => {
    return (
      circles
        // .filter(circle => {
        //   return true
        // })
        .map(circle => {
          circle = formatCircle(circle.toJS(), {
            meCirclesIds,
            meAdministratedCirclesIds,
          })
          return circle
        })
    )
  }
)

export const getFollowedCircles = createSelector(
  [getCirclesAsList, getMeCirclesIds],
  (circles, meCirclesIds) =>
    circles.map(circle => {
      return circle.isFollowedByMe
    })
)

//
// Fetching circlesList
//

const getCirclesIsFetching = createSelector([getState], state => state.get('isFetching'))

export const isFetchingCircles = createSelector(getCirclesIsFetching, isFetching => isFetching)

export const getCirclesSortedByDate = createSelector([getCirclesAsList], circles => {
  return circles.sort((a, b) => {
    return b.id - a.id // TODO: createdAt
  })
})
