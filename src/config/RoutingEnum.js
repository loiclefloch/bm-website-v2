import Route from '../utils/Route';

import UserPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import CirclesListPage from '../pages/circles/CirclesListPage'
import SettingsPage from '../pages/user/settings/SettingsPage'
import BookmarkPage from '../pages/bookmark/BookmarkPage'

// TODO: set pages on routes.js, we defining routes
class RoutingEnum {
  static LOGIN = new Route('LOGIN', '/login', UserPage)

  static DASHBOARD = new Route('DASHBOARD', '/dashboard', DashboardPage)

  static BOOKMARK = new Route('BOOKMARK', '/bookmarks/:bookmarkId', BookmarkPage)

  static CIRCLES = new Route('CIRCLES', '/circles', CirclesListPage)

  static BOOKS = new Route('BOOKS', '/books', null)

  static SETTINGS = new Route('SETTINGS', '/settings', SettingsPage)
}

export default RoutingEnum
