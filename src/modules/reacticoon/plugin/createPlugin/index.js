//
// define default plugin data
//
const generateDefaultPluginConfig = () => {
  // private data
  let _config = null

  // return default config
  return {
    modules: [],
    events: {},
    customEvents: {},
    getConfig: () => {
      return _config
    },
    // 
    // register the fron config for this plugin
    //
    registerConfig: config => {
      _config = config
    },
  }
}

const createPlugin = pluginConfigParam => {
  const pluginConfig = {
    ...generateDefaultPluginConfig(),
    ...pluginConfigParam,
  }

  return pluginConfig
}

export default createPlugin
