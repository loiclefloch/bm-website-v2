import Route from 'reacticoon/routing/Route'

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

  BOOK: new Route('BOOK', '/circles/:circleId/books/:bookId'),

  BOOK_NEW: new Route('BOOK_NEW', '/circles/:circleId/books/new'),

  BOOKS: new Route('BOOKS', '/circles/:circleId/books'),

  TESTS: new Route('TESTS', '/tests'),

  SETTINGS: new Route('SETTINGS', '/settings'),
}

export default RoutingEnum
