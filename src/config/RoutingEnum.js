import Route from '../utils/Route';

import UserPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import CirclesListPage from '../pages/circles/list/CirclesListPage'
import SettingsPage from '../pages/user/settings/SettingsPage'

class RoutingEnum {
  static LOGIN = new Route('LOGIN', '/login', UserPage)

  static DASHBOARD = new Route('DASHBOARD', '/dashboard', DashboardPage)

  static CIRCLES = new Route('CIRCLES', '/circles', CirclesListPage)

  static SETTINGS = new Route('SETTINGS', '/settings', SettingsPage)
}

export default RoutingEnum
