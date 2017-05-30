import Route from '../utils/Route';

/**
 * Note: we do not define the handler page here since RoutingEnum is import and use before they are
 * correclty initialize..
 * @type {Route}
 */

class RoutingEnum {
  static LOGIN = new Route('LOGIN', '/login')

  static DASHBOARD = new Route('DASHBOARD', '/dashboard')

  static BOOKMARK = new Route('BOOKMARK', '/bookmarks/:bookmarkId')

  static CIRCLES = new Route('CIRCLES', '/circles')

  static CIRCLE = new Route('CIRCLE', '/circles/:circleId')

  static BOOKS = new Route('BOOKS', '/books')

  static TESTS = new Route('TESTS', '/tests')

  static SETTINGS = new Route('SETTINGS', '/settings')
}

export default RoutingEnum
