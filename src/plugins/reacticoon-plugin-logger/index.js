import { ReactoonEvents } from '../../modules/reacticoon/event'
import { createPlugin } from '../../modules/reacticoon/plugin'

import Logger from './logger'

const ReactoonPluginExample = createPlugin({
  name: 'ReactoonLogger',
  modules: [],
  events: {
    [ReactoonEvents.LOG_WARN]: Logger.warning,
    [ReactoonEvents.LOG_NOT_IMPLEMENTED]: Logger.notImplemented,
    [ReactoonEvents.LOG_ERROR]: Logger.error,
    [ReactoonEvents.LOG_EXCEPTION]: Logger.logException,
    [ReactoonEvents.LOG_COMPONENT_DID_CATCH]: Logger.componentDidCatch,
  },
})

export default ReactoonPluginExample
