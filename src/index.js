import Application from './modules/reacticoon/archi/Application'

import 'normalize.css/normalize.css'
import './styles/index.scss'

// required by material-ui onTouchTap (see below)
import injectTapEventPlugin from 'react-tap-event-plugin'

// -- smooth scrolling
import smoothScroll from 'smooth-scroll'

//
// options
//

import uxReducer from './config/uxReducer'
import entities from './config/entities'
import middlewares from './config/middlewares'
import environment from './config/Config'
import modules from './config/modules'
import i18n from './config/i18n'
import routes from './config/routes'
import RoutingEnum from './config/RoutingEnum'
import Content from './config/Content'
import ApiManagerOptions from './config/ApiManagerOptions'
import plugins from './config/plugins'

//
// custom app configuration
//

// see https://cferdinandi.github.io/smooth-scroll/setup.html
smoothScroll.init({
  selector: 'a[href*="#"]', // for all anchor
  offset: 100, // let a top padding
})


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin()


//
// Application configuration
//

const appOptions = {
  middlewares,
  uxReducer,
  entities,
  environment,
  modules,
  i18n,
  plugins,
  routes,
  RoutingEnum,
  Content,
  ApiManagerOptions,
}

Application(appOptions)
