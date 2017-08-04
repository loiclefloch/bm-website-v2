import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
// import { persistStore, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import Immutable from 'immutable'

import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import api from '../middleware/api'
import auth from '../middleware/auth'

import newBookmarkMiddleware from '../modules/bookmark/middleware/newBookmarkMiddleware'

const composeEnhancers = composeWithDevTools({
  serialize: {
     immutable: Immutable
   },
})

// Transform Immutable objects into JSON
// TODO
const convertState = (state) => {
  // const newState = {};
  // for (let i of Object.keys(state)) {
  //   if (Immutable.Iterable.isIterable(state[i])) {
  //     newState[i] = state[i].toJS()
  //   } else {
  //     newState[i] = convertState(state[i])
  //   }
  // }
  return state;
}

const reduxLogger = createLogger({
  collapsed: true,
  transformer: (state) => {
    return convertState(state)
  }
})

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        api,
        auth,
        newBookmarkMiddleware,
        reduxLogger,
        routerMiddleware(browserHistory)
      ),
      // autoRehydrate()
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
  // persistStore(store)

  return store
}

export default configureStore
