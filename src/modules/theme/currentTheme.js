import Immutable from 'immutable'

import defaultTheme from '../../config/defaultTheme'

const DEFAULT = Immutable.fromJS(defaultTheme)

export const currentTheme = (state = DEFAULT, action) => {
  switch (action.type) {
    default:
      return state
  }
}
