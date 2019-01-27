import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

const UserListModule = createModule('App::UserListModule', {
  actions,
  reducer,
  selectors,
})

export default UserListModule
