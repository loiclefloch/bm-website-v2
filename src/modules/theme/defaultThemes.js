import Immutable from 'immutable'

import defaultTheme from '../../config/defaultTheme'

const DEFAULT = Immutable.fromJS({
  light: defaultTheme
})

export const defaultThemes = (state = DEFAULT, action) => {
  switch (action.type) {
    default:
      return state
  }
}
