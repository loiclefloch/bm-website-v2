import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { createLogger } from 'redux-logger'

import crashReporter from '../middleware/crashReporter'

import apiMiddleware from '../../api/apiMiddleware'
import createAppMiddleware from '../../middleware/appMiddleware/createAppMiddleware'

const reduxLogger = createLogger({
  collapsed: true,
})

const generateMiddlewares = (isDev, appMiddlewares) =>
  [
    thunk, 
    apiMiddleware,
    crashReporter, // must be before reduxLogger and after thunk and api
    isDev ? reduxLogger : null, // only on dev, but requires to be at this specific place

    createAppMiddleware(appMiddlewares),

    // FIXME: the router middleware has to be in the end, the actions made on middleware will not
    // work..
    //
    //
    // react-router-redux need this middleware to handle functions such as `push(location)`,
    // `replace(loacation)`
    // It handle actions creators that correspond with the history methods of the same name.
    // see https://github.com/ReactTraining/history/blob/v3/docs/GettingStarted.md#navigation
    //
    // For reference they are defined as follows:
    // push - Pushes a new location to history, becoming the current location.
    // replace - Replaces the current location in history.
    // go - Moves backwards or forwards a relative number of locations in history.
    // goForward - Moves forward one location. Equivalent to go(1)
    // goBack - Moves backwards one location. Equivalent to go(-1)
    //
    // Both push and replace take in a location descriptor, which can be an object describing the URL
    // or a plain string URL.
    //
    routerMiddleware(browserHistory),
  ].filter(elem => elem !== null) // remove null elements

export default generateMiddlewares
