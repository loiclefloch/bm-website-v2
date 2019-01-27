import isNil from 'lodash/isNil'
import { createSelector, getStateForModule } from 'reacticoon/selector'
import { formatCircle } from '../format'
import { getMeCirclesIds, getMeAdministratedCirclesIds } from '../selectors'

const getState = getStateForModule('App::CircleModule')

const getCircleIsFetching = createSelector([getState], state => state.get('isFetching', false))
const getCircles = createSelector([getState], state => state.get('list'))

const getCircleIdOnProps = (state, props) => props.circleId

export const makeGetCircle = () =>
  createSelector(
    [getCircleIdOnProps, getCircles, getMeCirclesIds, getMeAdministratedCirclesIds],
    (circleId, list, meCirclesIds, meAdministratedCirclesIds) => {
      const circleState = list.get(circleId)
      if (isNil(circleState)) {
        return null
      }
      const circleData = circleState.toJS()
      const circle = formatCircle(circleData, {
        meCirclesIds,
        meAdministratedCirclesIds,
      })
      return circle
    }
  )

export const isFetchingCircle = createSelector(getCircleIsFetching, isFetching => isFetching)
