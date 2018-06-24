import RoutingEnum from './RoutingEnum'

import LoginPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import BookmarkPage from '../pages/bookmark'
import BookmarkNewPage from '../pages/bookmarkNew'
import CirclesListPage from '../pages/circles/CirclesListPage'
// import CirclePage from '../pages/circle/CirclePage'
// import SettingsPage from '../pages/settings/SettingsPage'
import TestPage from '../pages/test/TestPage'

const routes = [
  {
    definition: RoutingEnum.LOGIN,
    handler: LoginPage,
  },
  {
    definition: RoutingEnum.DASHBOARD,
    handler: DashboardPage,
  },
  {
    definition: RoutingEnum.BOOKMARK,
    handler: BookmarkPage,
  },
  {
    definition: RoutingEnum.NEW_BOOKMARK,
    handler: BookmarkNewPage,
  },
  {
    definition: RoutingEnum.CIRCLES,
    handler: CirclesListPage,
  },
  // {
  //   definition: RoutingEnum.CIRCLE,
  //   handler: CirclePage,
  // },
  // {
  //   definition: RoutingEnum.BOOKS,
  //   disabled: true,
  //   handler: null,
  // },
  {
    definition: RoutingEnum.TESTS,
    handler: TestPage,
  },
  // {
  //   definition: RoutingEnum.SETTINGS,
  //   handler: SettingsPage,
  // },
]

export default routes
