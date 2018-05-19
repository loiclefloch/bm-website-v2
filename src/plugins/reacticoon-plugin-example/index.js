import { createPlugin } from '../../modules/reacticoon/plugin'
import { ReacticoonEvents } from '../../modules/reacticoon/event'

import testModule from './modules/testModule'

import onAppInit from './events/onAppInit'
import onCustomEvent from './events/onCustomEvent'

//
// Create the plugin configuration
// `createPlugin` will verify that the given configuration is correct, and add default configuration
//
//
const ReacticoonPluginExample = createPlugin({
  // The plugin name. Must be unique. All Reacticoon plugins have the 'Reacticoon' prefix.
  name: 'ReacticoonPluginExample',
  // list of the modules that the plugin register.
  // optionnal.
  modules: [
    testModule,
  ],
  // Describe listeners for a particular event.
  // optionnal.
  events: {
    [ReacticoonEvents.ON_APP_INIT]: onAppInit,
    [onCustomEvent.EVENT]: onCustomEvent,
  },
  // Describe custom events created by the plugin
  // Note: Any event name should be prefixed with the Plugin name. 
  // e.g: 'ReacticoonPluginExample::Event::onCustomEvent'
  // optionnal.
  customEvents: {
    [onCustomEvent.EVENT]: 'Example of a custom event',
  }
})

export default ReacticoonPluginExample
