import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('root');

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
