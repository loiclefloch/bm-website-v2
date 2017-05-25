import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import Immutable from "immutable"

import entities from './entities'

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

const DEFAULT_API_ERROR = Immutable.fromJS({})

// Updates error message to notify about the failed fetches.
const apiError = (state = DEFAULT_API_ERROR, action) => {
  const { type, apiError } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return DEFAULT_API_ERROR
  } else if (apiError) {
    return state.merge(apiError)
  }

  return state
}


const rootReducer = combineReducers({
  entities,
  routing,
  apiError,
  session,
})

export default rootReducer
