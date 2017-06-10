import Immutable from 'immutable'

import getTheme from './getTheme'

const DEFAULT = Immutable.fromJS({
  light: getTheme(),
})

export const defaultThemes = (state = DEFAULT, action) => {
  switch (action.type) {
    default:
      return state
  }
}
