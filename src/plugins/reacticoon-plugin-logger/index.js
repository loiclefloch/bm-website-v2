import { ReacticoonEvents } from '../../modules/reacticoon/event'
import { createPlugin } from '../../modules/reacticoon/plugin'

import Logger from './logger'

const ReacticoonPluginExample = createPlugin({
  name: 'ReacticoonLogger',
  modules: [],
  events: {
    [ReacticoonEvents.LOG_WARN]: Logger.warn,
    [ReacticoonEvents.LOG_NOT_IMPLEMENTED]: Logger.notImplemented,
    [ReacticoonEvents.LOG_ERROR]: Logger.error,
    [ReacticoonEvents.LOG_EXCEPTION]: Logger.logException,
    [ReacticoonEvents.LOG_COMPONENT_DID_CATCH]: Logger.componentDidCatch,
  },
})

export default ReacticoonPluginExample
