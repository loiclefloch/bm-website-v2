import { Application } from 'reacticoon/archi'

//
// options
//

import uxReducer from './config/uxReducer'
import entities from './config/entities'
import middlewares from './config/middlewares'
import modules from './config/modules'
import i18n from './config/i18n'
import routing from './config/routing'
import Content from './config/Content'
import ApiManagerOptions from './config/ApiManagerOptions'
import plugins from './config/plugins'

//
// custom app configuration
//

import './styles/index.scss'

// -- smooth scrolling
import SmoothScroll from 'smooth-scroll'

// Roboto font
import 'typeface-roboto'

// see https://cferdinandi.github.io/smooth-scroll/setup.html
new SmoothScroll('a[href*="#"]', {
  selector: '', // for all anchor
  offset: 100, // let a top padding
})
// smoothScroll.init({
// selector: '', // for all anchor
// offset: 100, // let a top padding
// })

//
// Application configuration
//

const appOptions = {
  middlewares,
  uxReducer,
  entities,
  modules,
  i18n,
  plugins,
  routing,
  Content,
  ApiManagerOptions,
}

Application(appOptions)
