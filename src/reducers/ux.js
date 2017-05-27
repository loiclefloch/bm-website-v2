import { combineReducers } from 'redux'

import {
  theme
} from '../modules/theme'

import {
  bookmarkUX
} from '../modules/bookmark'

const ux = combineReducers({
  theme,
  bookmarkUX,
});

export default ux
