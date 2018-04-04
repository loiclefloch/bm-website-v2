import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './ErrorBoundary'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import configureRoutes from '../utils/configureRoutes'

/**
 * We need to import routes from here
 * otherwise, HMR thinks it's on higher level and reload the entire page
 * instead of only the page component
 * TODO: remove trick
 */
import routes from '../../../../../src/config/routes'

const App = ({ store, history, appOptions }) => {
  const router = (
    <Router
      history={history}
      routes={configureRoutes({
        routes,
      })(store)}
    />
  )

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <appOptions.Content>{router}</appOptions.Content>
      </Provider>
    </ErrorBoundary>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
