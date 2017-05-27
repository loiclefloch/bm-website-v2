import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import Immutable from 'immutable'
import { reducer as uiReducer } from 'redux-ui'

import entities from './entities'
import ux from './ux'

const DEFAULT_SESSION = Immutable.fromJS({
  authRequired: true,
  language: "en", // TODO: get default on I18n
  user: null,
  userId: null,
})

// Updates an entity cache in response to any action with response.entities.
const session = (state = DEFAULT_SESSION, action) => {
  // if (action.response && ) {
  //   return state.merge(action.response.entities))
  // }

  return state
}

const rootReducer = combineReducers({
  entities,
  ux,
  ui: uiReducer,
  routing,
  session,
})

export default rootReducer
