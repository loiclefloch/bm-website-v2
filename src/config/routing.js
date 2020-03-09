import React from 'react'

import PageLoader from '../components/PageLoader'

const routing = api => {
  api.registerAsyncLoaderView(<PageLoader />)

  return [
    {
      name: 'DASHBOARD',
      path: '/',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "DashboardPage" */ '../pages/dashboard')
      ),
    },

    {
      name: 'LOGIN',
      path: '/login',
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "LoginPage" */ '../pages/login')
      ),
    },

    {
      name: 'BOOKMARK',
      path: '/bookmarks/:bookmarkId',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "BookmarkPage" */ '../pages/bookmark')
      ),
    },
    {
      name: 'NEW_BOOKMARK',
      path: '/bookmark/new',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "BookmarkNewPage" */ '../pages/bookmarkNew')
      ),
    },
    {
      name: 'CIRCLES',
      path: '/circles',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "CirclesListPage" */ '../pages/circles/CirclesListPage')
      ),
    },
    {
      name: 'CIRCLE_NEW',
      path: '/circles/new',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "CircleNewPage" */ '../pages/circleNew')
      ),
    },
    {
      name: 'CIRCLE',
      path: '/circles/:circleId',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "CirclePage" */ '../pages/circle/CirclePage')
      ),
    },
    {
      name: 'BOOK_NEW',
      path: '/circles/:circleId/books/new',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "BookNewPage" */ '../pages/bookNew')
      ),
    },
    {
      name: 'BOOK',
      path: '/circles/:circleId/books/:bookId',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "BookPage" */ '../pages/book')
      ),
    },
    // // {
    //     name: 'BOOKS',
    //   path: '/circles/:circleId/books',
    //   authRequired: true,
    //   disabled: true,
    //   handler: null,
    // },
    {
      name: 'TESTS',
      path: '/tests',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "TestPage" */ '../pages/test/TestPage')
      ),
    },
    {
      name: 'SETTINGS',
      path: '/settings',
      authRequired: true,
      handler: api.createAsyncPage(() =>
        import(/*  webpackChunkName: "SettingsPage" */ '../pages/settings/SettingsPage')
      ),
    },
  ]
}

export default routing
