// auth middleware

import { LOGIN_SUCCESS } from '../pages/login/actions'
import RoutingEnum from '../config/RoutingEnum'
import { replace } from 'react-router-redux';

/**
 * Intercepts @@router/LOCATION_CHANGE action and redirects to login screen if needed
 */
function routeRequireLoginMiddleware({getState, dispatch}) {
    return (next) => (action) => {
        if (typeof action === 'object' && action.hasOwnProperty('type')) {
            if (action.type === "@@router/LOCATION_CHANGE") {
                next(action); // send it to next so identity will be set

                // TODO: if next route require login
                // const path = RoutingEnum.LOGIN.getPath()
                // return next(replace(path));
                //
                // TODO: if already logged in and go on login
            }
        }

        return next(action);
    };
}

export default authMiddleware
