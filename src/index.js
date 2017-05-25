import React from 'react'
import { render } from 'react-dom'
import App from './App'

// modules css

import './reset_css.css'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('root');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)


// TODO: test hot module
// https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
// http://joshbroton.com/add-react-hot-reloading-create-react-app/
// https://medium.com/@sheepsteak/adding-hot-module-reloading-to-create-react-app-e053fadf569d
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
