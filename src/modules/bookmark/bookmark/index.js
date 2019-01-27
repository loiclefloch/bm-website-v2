import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import * as middlewares from './middlewares'
import reducer from './reducer'

const BookmarkModule = createModule('Bookmark', {
  actions,
  reducer,
  selectors,
  middlewares,
})

export default BookmarkModule
