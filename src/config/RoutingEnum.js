import { RouteDefinition, createRoutingEnum } from 'reacticoon/routing'

/**
 * Note: we do not define the handler page here since RoutingEnum is import and use before they are
 * correclty initialize..
 * @type {RouteDefinition}
 */

const RoutingEnum = createRoutingEnum({
  LOGIN: new RouteDefinition('LOGIN', '/login', false),

  DASHBOARD: new RouteDefinition('DASHBOARD', '/', true),

  NEW_BOOKMARK: new RouteDefinition('NEW_BOOKMARK', '/bookmark/new', true),

  BOOKMARK: new RouteDefinition('BOOKMARK', '/bookmarks/:bookmarkId', true),

  CIRCLES: new RouteDefinition('CIRCLES', '/circles', true),

  CIRCLE_NEW: new RouteDefinition('CIRCLE_NEW', '/circles/new', true),

  CIRCLE: new RouteDefinition('CIRCLE', '/circles/:circleId', true),

  BOOK: new RouteDefinition('BOOK', '/circles/:circleId/books/:bookId', true),

  BOOK_NEW: new RouteDefinition('BOOK_NEW', '/circles/:circleId/books/new', true),

  BOOKS: new RouteDefinition('BOOKS', '/circles/:circleId/books', true),

  TESTS: new RouteDefinition('TESTS', '/tests'),

  SETTINGS: new RouteDefinition('SETTINGS', '/settings', true),
})

export default RoutingEnum
