import React from 'react'
import RoutingEnum from './RoutingEnum'

import { createLoadable } from 'reacticoon/view'

import PageLoader from '../components/PageLoader'

const createAsyncPage = loader => createLoadable(loader, () => <PageLoader />)

const routes = [
  {
    definition: RoutingEnum.LOGIN,
    handler: createAsyncPage(() => import(/*  webpackChunkName: "LoginPage" */ '../pages/login')),
  },
  {
    definition: RoutingEnum.DASHBOARD,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "DashboardPage" */ '../pages/dashboard')
    ),
  },
  {
    definition: RoutingEnum.BOOKMARK,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "BookmarkPage" */ '../pages/bookmark')
    ),
  },
  {
    definition: RoutingEnum.NEW_BOOKMARK,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "BookmarkNewPage" */ '../pages/bookmarkNew')
    ),
  },
  {
    definition: RoutingEnum.CIRCLES,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "CirclesListPage" */ '../pages/circles/CirclesListPage')
    ),
  },
  {
    definition: RoutingEnum.CIRCLE_NEW,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "CircleNewPage" */ '../pages/circleNew')
    ),
  },
  {
    definition: RoutingEnum.CIRCLE,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "CirclePage" */ '../pages/circle/CirclePage')
    ),
  },
  {
    definition: RoutingEnum.BOOK_NEW,
    handler: createAsyncPage(() => (
      import(/*  webpackChunkName: "BookNewPage" */ '../pages/bookNew')
    ))
  },
  {
    definition: RoutingEnum.BOOK,
    handler: createAsyncPage(() => (
      import(/*  webpackChunkName: "BookPage" */ '../pages/book')
    ))
  },
  // {
  //   definition: RoutingEnum.BOOKS,
  //   disabled: true,
  //   handler: null,
  // },
  {
    definition: RoutingEnum.TESTS,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "TestPage" */ '../pages/test/TestPage')
    ),
  },
  {
    definition: RoutingEnum.SETTINGS,
    handler: createAsyncPage(() =>
      import(/*  webpackChunkName: "SettingsPage" */ '../pages/settings/SettingsPage')
    ),
  },
]

export default routes
