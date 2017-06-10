import { combineReducers } from 'redux'

import {
  bookmarksList,
  bookmark,
  newBookmark,
} from '../modules/bookmark'

import {
  tagsList,
} from '../modules/tag'

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
  newBookmark,
  circlesList,
  circle,
  oauth,
  me,
  users,
  tagsList,
});

export default entities
