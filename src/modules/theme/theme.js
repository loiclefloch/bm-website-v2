import { combineReducers } from 'redux'

import { defaultThemes } from './defaultThemes'
import { currentTheme } from './currentTheme'

export const theme = combineReducers({
  current: currentTheme,
  defaults: defaultThemes
});
