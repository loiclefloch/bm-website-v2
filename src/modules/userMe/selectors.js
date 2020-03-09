import { getStateForModule, createSelector } from 'reacticoon/selector'

import isEmpty from 'lodash/isEmpty'

//
// entities / me / data /
//

const getMeOnState = getStateForModule('UserMe')

const getMeObjectOnState = state => getMeOnState(state).get('data')

export const isPendingMe = createSelector(getMeOnState, meData => meData.get('isPending'))

export const isLoggedIn = createSelector(
  getMeObjectOnState,
  me => isEmpty(me.id) // TODO: search for token
)

export const getMe = createSelector(getMeObjectOnState, me => me.toJS() || null)

export const fetchUserSelectors = {
  isFetchin: isPendingMe,
  getData: getMe,
  getError: () => null,
}
