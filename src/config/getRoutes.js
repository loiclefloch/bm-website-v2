import React from 'react'
import { Route } from 'react-router'
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty'


import Layout from './Layout'

import RoutingEnum from './RoutingEnum'

import routes from './routes'

// see https://stackoverflow.com/questions/38563679/react-redux-dispatch-action-on-app-load-init
const authenticate = (state, replace, callback) => {
  if (isEmpty(state.oauthToken) || isEmpty(state.oauthToken.token)) {
    // no token, redirect to login
    replace(RoutingEnum.LOGIN)
  } else if (state.user === null) {
    // no user, retrieve it
    console.log('Should load user')
  }

  callback()
}

// this function is called only once, before application initially starts to render react-route and any of its related DOM elements
// it can be used to add init config settings to the application
const onAppInit = (store) => {
  return (nextState, replace, callback) => {
    authenticate(store.getState(), replace, callback)
  };
}



// See https://stackoverflow.com/questions/35849970/accessing-redux-store-from-routes-set-up-via-react-router
const getRoutes = (store) => (
  <Route path="/"
    component={Layout}
    // onEnter={onAppInit(store)}
  >
    {map(routes, (route) => {
      if (!route.definition.disable) {
        return <Route
          name={route.definition.name}
          path={route.definition.path}
          component={route.handler}
          key={route.definition.name}
          // onEnter={route.authRequired ? requireAuth : null}
               />
      }

      return null
    })}
  </Route>
)

export default getRoutes