import { combineReducers } from 'redux'

import {
  bookmarksList,
  bookmark,
} from '../modules/bookmark'

import {
  circlesList,
  circle,
} from '../modules/circle'

import {
  oauth
} from '../modules/auth'

const entities = combineReducers({
  bookmarksList,
  bookmark,
  oauth,
  circlesList,
  circle
});

export default entities
