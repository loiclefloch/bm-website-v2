import Route from '../utils/Route';

import UserPage from '../pages/login'
import DashboardPage from '../pages/dashboard'

class RoutingEnum {
  static LOGIN = new Route('LOGIN', '/login', UserPage)

  static DASHBOARD = new Route('DASHBOARD', '/dashboard', DashboardPage)
}

export default RoutingEnum
