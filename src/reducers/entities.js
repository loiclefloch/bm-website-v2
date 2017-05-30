import { combineReducers } from 'redux'

import {
  bookmarksList,
  bookmark,
  newBookmark,
} from '../modules/bookmark'

import {
  circlesList,
  circle,
} from '../modules/circle'

import {
  oauth,
} from '../modules/auth'

import {
  users,
  me,
} from '../modules/user'

const entities = combineReducers({
  bookmarksList,
  bookmark,
  circlesList,
  circle,
  oauth,
  me,
  users,
  newBookmark,
});

export default entities
