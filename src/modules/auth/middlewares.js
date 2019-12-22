// auth middleware

import { createMiddleware } from 'reacticoon/middleware'
import { login } from '../auth'
import { setCookie } from 'reacticoon/storage'
import { getRoute, replace } from 'reacticoon/routing'

/**
 * Intercepts LOGIN action and redirects to dashboard screen if the login succeeded
 * Otherwise just sends action to next middleware
 *
 * @returns {Function}
 */
const authSuccessMiddleware = createMiddleware(
  'authSuccessMiddleware',
  login.SUCCESS,
  ({ next, dispatch, action }) => {
    setCookie('token', action.response.result.accessToken)

    next(action) // send it to next so identity will be set

    const path = getRoute('DASHBOARD').getPath()

    return dispatch(replace(path))
  }
)

export default [authSuccessMiddleware]
