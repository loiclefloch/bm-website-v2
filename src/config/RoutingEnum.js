import Route from '../utils/Route';

import UserPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import CirclesListPage from '../pages/circles/list/CirclesListPage'

class RoutingEnum {
  static LOGIN = new Route('LOGIN', '/login', UserPage)

  static DASHBOARD = new Route('DASHBOARD', '/dashboard', DashboardPage)

  static CIRCLES = new Route('CIRCLES', '/circles', CirclesListPage)
}

export default RoutingEnum
