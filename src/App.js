import React from 'react'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'

import ApiManager from './api/ApiManager'
import ApiManagerOptions from './config/ApiManagerOptions'

import Root from './containers/Root'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ApiManagerOptions.store = store

ApiManager.configure(ApiManagerOptions)

const App = () => {
  return (
    <Root
      store={store}
      history={history}
    />
  )
}

export default App
