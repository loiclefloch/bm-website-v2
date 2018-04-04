import find from 'lodash/find'

let _routes = []

export const registerRoutes = routes => {
  _routes = routes
}

export const getRoutes = routes => _routes

export const getConfigForRoute = route =>
  find(_routes, routeDefinition => route.name === routeDefinition.definition.name)

//
//
//

let _history = null

export const registerHistory = history => {
  _history = history
}

export const getHistory = () => _history
