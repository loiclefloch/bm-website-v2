import { createPlugin } from '../../modules/reacticoon/plugin'
import { ReacticoonEvents } from '../../modules/reacticoon/event'

import formModule from './modules/form'

import onAppInit from './events/onAppInit'

//
// Exports
//

export createForm from './modules/form/createForm'
export createFormCustomAction from './modules/form/createFormCustomAction'
export WithEditionContainer from './modules/form/containers/WithEditionContainer'
export withForm from './modules/form/containers/withForm'
export withForms from './modules/form/containers/withForms'

//
//
//

const ReacticoonPluginForm = createPlugin({
  // The plugin name. Must be unique. All Reacticoon plugins have the 'Reacticoon' prefix.
  name: 'ReacticoonPluginForm',
  // list of the modules that the plugin register.
  // optionnal.
  modules: [
    formModule,
  ],
  events: {
    [ReacticoonEvents.ON_APP_INIT]: onAppInit,
  },
})

export default ReacticoonPluginForm
