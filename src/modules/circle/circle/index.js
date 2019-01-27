import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

export * from './actions'
export * from './selectors'

const CircleModule = createModule('App::CircleModule', {
  actions,
  reducer,
  selectors,
})

export default CircleModule
