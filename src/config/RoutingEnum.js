import { Route, createRoutingEnum } from 'reacticoon/routing'

/**
 * Note: we do not define the handler page here since RoutingEnum is import and use before they are
 * correclty initialize..
 * @type {Route}
 */

const RoutingEnum = createRoutingEnum({
  LOGIN: new Route('LOGIN', '/login', false),

  DASHBOARD: new Route('DASHBOARD', '/', true),

  NEW_BOOKMARK: new Route('NEW_BOOKMARK', '/bookmark/new', true),

  BOOKMARK: new Route('BOOKMARK', '/bookmarks/:bookmarkId', true),

  CIRCLES: new Route('CIRCLES', '/circles', true),

  CIRCLE_NEW: new Route('CIRCLE_NEW', '/circles/new', true),

  CIRCLE: new Route('CIRCLE', '/circles/:circleId', true),

  BOOK: new Route('BOOK', '/circles/:circleId/books/:bookId', true),

  BOOK_NEW: new Route('BOOK_NEW', '/circles/:circleId/books/new', true),

  BOOKS: new Route('BOOKS', '/circles/:circleId/books', true),

  TESTS: new Route('TESTS', '/tests'),

  SETTINGS: new Route('SETTINGS', '/settings', true),
})

export default RoutingEnum
