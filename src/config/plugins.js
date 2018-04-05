import reactoonPluginExample from '../plugins/reacticoon-plugin-example'
import reactoonLogger from '../plugins/reacticoon-plugin-logger'

export default [
  {
    plugin: reactoonPluginExample,
    config: {
      toto: 42,
    },
  },
  {
    plugin: reactoonLogger,
    config: {},
  },
]
