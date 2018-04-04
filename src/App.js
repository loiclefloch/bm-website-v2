import React from 'react'

import Root from './modules/reactoon/archi/components/Root'


const App = ({ store, history, appOptions }) => {
  return <Root store={store} history={history} appOptions={appOptions} />
}

export default App
