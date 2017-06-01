import React from 'react'
import { render } from 'react-dom'

// -- css
// have to be first import, otherwise have priority on custom style
import 'normalize.css/normalize.css'
import './index.scss'

import App from './App'

// required by material-ui onTouchTap (see below)
import injectTapEventPlugin from 'react-tap-event-plugin'

// hot loader
import { AppContainer } from 'react-hot-loader'

// -- smooth scrolling
import smoothScroll from 'smooth-scroll'

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
    <App />
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
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
