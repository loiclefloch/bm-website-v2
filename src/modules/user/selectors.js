import { createSelector } from 'reselect'

import isEmpty from 'lodash/isEmpty'

//
// entities / me / data /
//

const getMeOnState = state => state.entities.me
const getMeObjectOnState = state => getMeOnState(state).get('data')

export const isFetchingMe = createSelector(
  getMeOnState,
  meData => meData.isFetching
)

export const isLoggedIn = createSelector(
  getMeObjectOnState,
  me => isEmpty(me.id) // TODO: search for token
)

export const getMe = createSelector(
  getMeObjectOnState,
  me => me.toJS()
)
