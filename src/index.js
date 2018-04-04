import React from 'react'
import { render } from 'react-dom'

// -- css
// have to be first import, otherwise have priority on custom style
import 'normalize.css/normalize.css'
import './styles/index.scss'

import App from './App'

// required by material-ui onTouchTap (see below)
import injectTapEventPlugin from 'react-tap-event-plugin'

// hot loader
import { AppContainer } from 'react-hot-loader'

// -- smooth scrolling
import smoothScroll from 'smooth-scroll'

///
///
///
import configureRootReducer from './modules/reactoon/archi/utils/configureRootReducer'

import { setCurrentEnv } from './modules/reactoon/environment'
import { registerModules } from './modules/reactoon/module'
import generateModuleEntities from './modules/reactoon/module/generateModuleEntities'
import generateModuleMiddlewares from './modules/reactoon/module/generateModuleMiddlewares'

//
// options
//

import uxReducer from './config/uxReducer'
import entities from './config/entities'
import middlewares from './config/middlewares'
import environment from './config/Config'
import modules from './config/modules'
import routes from './config/routes'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './modules/reactoon/archi/store/configureStore'

import ApiManager from './modules/reactoon/api/ApiManager'
import ApiManagerOptions from './config/ApiManagerOptions'
import Content from './config/Content'

const appOptions = {
  middlewares,
  uxReducer,
  entities,
  environment,
  modules,
  routes,
  Content,
}

registerModules(appOptions.modules)

//
// generate entities
//
appOptions.entities = {
  // allow user to give reducer directly via `appOptions`, which is not registered as a module
  ...(appOptions.entities || {}),
  ...generateModuleEntities(),
}

//
// generate middlewates
//
// allow user to give middleware directly via `appOptions`, which is not registered as a module
appOptions.middlewares = [
  ...(appOptions.middlewares || []),
  ...generateModuleMiddlewares(),
]

//
// root reducer
//

appOptions.rootReducer = configureRootReducer(appOptions)

//
// store
//

const store = configureStore(appOptions)

setCurrentEnv(appOptions.environment)

const history = syncHistoryWithStore(browserHistory, store)

ApiManagerOptions.store = store

ApiManager.configure(ApiManagerOptions)

// see https://cferdinandi.github.io/smooth-scroll/setup.html
smoothScroll.init({
  selector: 'a[href*="#"]', // for all anchor
  offset: 100, // let a top padding
})

const rootEl = document.getElementById('root')

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin()

render(
  <AppContainer>
    <App store={store} history={history} appOptions={appOptions} />
  </AppContainer>,
  rootEl
)

// https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
// http://joshbroton.com/add-react-hot-reloading-create-react-app/
// https://medium.com/@sheepsteak/adding-hot-module-reloading-to-create-react-app-e053fadf569d
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} history={history} appOptions={appOptions} />
      </AppContainer>,
      rootEl
    )
  })
}
