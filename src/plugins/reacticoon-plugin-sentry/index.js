import { ReacticoonEvents } from '../../modules/reacticoon/event'
import { createPlugin } from '../../modules/reacticoon/plugin'

import Logger from './logger'
import onAppInit from './events/onAppInit'

const ReacticoonPluginExample = createPlugin({
  name: 'ReacticoonSentry',
  modules: [],
  events: {
    [ReacticoonEvents.ON_APP_INIT]: onAppInit,

    [ReacticoonEvents.LOG_WARN]: Logger.warning,
    [ReacticoonEvents.LOG_NOT_IMPLEMENTED]: Logger.notImplemented,
    [ReacticoonEvents.LOG_ERROR]: Logger.error,
    [ReacticoonEvents.LOG_EXCEPTION]: Logger.logException,
    [ReacticoonEvents.LOG_COMPONENT_DID_CATCH]: Logger.componentDidCatch,
  },
})

export default ReacticoonPluginExample
