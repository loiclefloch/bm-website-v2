import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

const BookmarkListModule = createModule('BookmarkList', {
  actions,
  reducer,
  selectors,
})

export default BookmarkListModule
