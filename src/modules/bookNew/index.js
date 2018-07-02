import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import * as middlewares from './middlewares'
import reducer from './reducer'

export * from './actions'
export * from './selectors'

const BookNewModule = createModule('App::BookNewModule', {
  actions,
  reducer,
  selectors,
  middlewares,
})

export default BookNewModule
