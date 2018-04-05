import invariant from 'invariant'
import find from 'lodash/find'
import isFunction from 'lodash/isFunction'

import EventManager from '../event/EventManager'
import validatePlugin from './validatePlugin'

//
// array of plugins config
// A plugin config is an object:
// - plugin
// - config
//
let _pluginsConfig = null

// allows to iterate `_pluginsConfig`
const forEachPlugin = callback =>
  _pluginsConfig.forEach(pluginConfig =>
    callback({ plugin: pluginConfig.plugin, config: pluginConfig.config })
  )

export const registerPlugins = pluginsConfig => {
  _pluginsConfig = pluginsConfig

  forEachPlugin(({ plugin, config }) => {
    registerPluginEvent(plugin)

    //
    // register config on the plugin
    //
    invariant(isFunction(plugin.registerConfig), `${plugin.name}: registerConfig is not a function`)
    plugin.registerConfig(config)

    // TODO: in dev only
    // -- verify plugin names collusion

    // -- verify plugin config
    validatePlugin(plugin)
  })
}

const registerPluginEvent = plugin => {
  EventManager.registerEvents(plugin.customEvents)
  EventManager.addListeners(plugin.events)
}

export const generatePluginEntities = () => {
  let entities = {}

  forEachPlugin(({ plugin, config }) => {
    entities = { ...entities, ...(plugin.entities || {}) }
  })

  return entities
}

export const generatePluginMiddlewares = () => {
  let middlewares = []

  forEachPlugin(({ plugin, config }) => {
    middlewares = { ...middlewares, ...(plugin.middlewares || []) }
  })

  return middlewares
}

export const getPluginConfig = pluginName => {
  const pluginConfig = find(_pluginsConfig, pluginConfig => pluginConfig.plugin.name === pluginName)

  // we call getConfig() instead if `pluginConfig.config` since the `registerConfig` could change 
  // the plugin configuration (add defaults, etc) and `pluginConfig.config` is the config set by
  // the user
  return pluginConfig.plugin.getConfig()
}
