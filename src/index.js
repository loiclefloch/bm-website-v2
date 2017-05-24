import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import ApiManager from './api/ApiManager'
import ApiManagerOptions from './config/ApiManagerOptions'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ApiManagerOptions.store = store

ApiManager.configure(ApiManagerOptions)

const rootEl = document.getElementById('root');


render(
  <Root
    store={store}
    history={history}
  />,
  rootEl
)


// TODO: test hot module
// https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
// http://joshbroton.com/add-react-hot-reloading-create-react-app/
// https://medium.com/@sheepsteak/adding-hot-module-reloading-to-create-react-app-e053fadf569d
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default
    render(
      <NextApp
        store={store}
        history={history}
      />,
      rootEl
    )
  })
}
