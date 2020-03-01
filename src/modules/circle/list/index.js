import { createModule } from 'reacticoon/module'

import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

export * from './actions'
export * from './selectors'

const CircleListModule = createModule('App::CircleListModule', {
  actions,
  reducer,
  selectors,
})

export default CircleListModule
