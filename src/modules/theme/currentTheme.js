import Immutable from 'immutable'

import defaultTheme from '../../config/defaultTheme'

const CHANGE_CURRENT_THEME = 'Theme::CHANGE_CURRENT_THEME'

export const changeCurrentTheme = (newCurrentTheme) => ({
  type: CHANGE_CURRENT_THEME,
  newCurrentTheme
})

const DEFAULT = Immutable.fromJS(defaultTheme)

export const currentTheme = (state = DEFAULT, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_THEME:
      return Immutable.fromJS(action.newCurrentTheme)
    default:
      return state
  }
}
