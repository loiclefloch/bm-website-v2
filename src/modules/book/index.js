import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

const BookModule = createModule('App::BookModule', {
  actions,
  reducer,
  selectors,
})

export default BookModule
