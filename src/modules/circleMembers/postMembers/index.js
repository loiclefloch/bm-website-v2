import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'
import * as middlewares from './middlewares'

export * from './actions'
export * from './selectors'

const PostCircleMembersModule = createModule('App::PostCircleMembersModule', {
  actions,
  reducer,
  selectors,
  middlewares,
})

export default PostCircleMembersModule
