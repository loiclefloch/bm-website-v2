import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { persistStore, autoRehydrate } from 'redux-persist'

import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import api from '../middleware/api'
import auth from '../middleware/auth'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        api,
        auth,
        createLogger(),
        routerMiddleware(browserHistory)
      ),
      DevTools.instrument(),
      autoRehydrate()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  // begin periodically persisting the store
  persistStore(store)

  return store
}

export default configureStore
