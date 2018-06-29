import Route from '../modules/reacticoon/routing/Route'

/**
 * Note: we do not define the handler page here since RoutingEnum is import and use before they are
 * correclty initialize..
 * @type {Route}
 */

const RoutingEnum =  {
  LOGIN: new Route('LOGIN', '/login'),

  DASHBOARD: new Route('DASHBOARD', '/dashboard'),

  NEW_BOOKMARK: new Route('NEW_BOOKMARK', '/bookmark/new'),

  BOOKMARK: new Route('BOOKMARK', '/bookmarks/:bookmarkId'),

  CIRCLES: new Route('CIRCLES', '/circles'),

  CIRCLE_NEW: new Route('CIRCLE_NEW', '/circles/new'),

  CIRCLE: new Route('CIRCLE', '/circles/:circleId'),

  BOOKS: new Route('BOOKS', '/books'),

  TESTS: new Route('TESTS', '/tests'),

  SETTINGS: new Route('SETTINGS', '/settings'),
}

export default RoutingEnum
