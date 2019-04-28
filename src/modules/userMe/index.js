import { createModule } from 'reacticoon/module'

import * as selectors from './selectors'
import * as actions from './actions'
import * as middlewares from './middlewares'
import reducer from './reducer'

export * from './actions'
export * from './selectors'

export default createModule('UserMe', {
  reducer,
  selectors,
  actions,
  middlewares,
})
