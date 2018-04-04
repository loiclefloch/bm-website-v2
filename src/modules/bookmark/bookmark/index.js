import { createModule } from '../../reactoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import * as middlewares from './middlewares'
import bookmarkReducer from './reducer'

const BookmarkModule = createModule('Bookmark', {
  actions,
  reducer: bookmarkReducer,
  selectors,
  middlewares,
})

export default BookmarkModule
