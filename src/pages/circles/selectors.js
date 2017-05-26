import { createSelector } from 'reselect'

import {
  getCirclesAsList,
} from '../../modules/circle'

//
// Circles
//

export const getCirclesSortedByDate = createSelector(
  [ getCirclesAsList ],
  (circles) => {
    return circles.sort((a, b) => {
      return b.id - a.id // TODO: createdAt
    })
  }
)
