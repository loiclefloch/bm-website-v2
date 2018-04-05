import { ReactoonEvents } from '../../modules/reacticoon/event'
import { createPlugin } from '../../modules/reacticoon/plugin'

import onAppInit from './events/onAppInit'
import onCustomEvent from './events/onCustomEvent'

const ReactoonPluginExample = createPlugin({
  name: 'ReactoonPluginExample',
  modules: [],
  events: {
    [ReactoonEvents.ON_APP_INIT]: onAppInit,
    [onCustomEvent.EVENT]: onCustomEvent,
  },
  customEvents: {
    [onCustomEvent.EVENT]: 'Example of a custom event',
  }
})

export default ReactoonPluginExample
