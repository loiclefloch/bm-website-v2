// auth middleware

import { login } from '../modules/auth'
import RoutingEnum from '../config/RoutingEnum'
import { replace } from 'react-router-redux'

/**
* Intercepts LOGIN action and redirects to dashboard screen if the login succeeded
* Otherwise just sends action to next middleware
*
* @returns {Function}
*/
function authMiddleware({getState, dispatch}) {
  return (next) => (action) => {
    if (typeof action === 'object' && action.hasOwnProperty('type')) {
      if (action.type === login.SUCCESS) {
        next(action) // send it to next so identity will be set

        const path = RoutingEnum.DASHBOARD.getPath()

        return next(replace(path))
      }
    }

    return next(action);
  };
}

export default authMiddleware
