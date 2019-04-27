import { __DEV__ } from 'reacticoon/environment'
import reacticoonPluginExample from 'app/reacticoon-plugins/reacticoon-plugin-example/src'
import reacticoonLogger from 'app/reacticoon-plugins/reacticoon-plugin-logger/src'
import reacticoonSentry from 'app/reacticoon-plugins/reacticoon-plugin-sentry/src'
import reacticoonMaterialUI from 'app/reacticoon-plugins/reacticoon-material-ui/src'
import reacticoonForm from 'app/reacticoon-plugins/reacticoon-form/src'
import { reacticoonValidator } from 'app/reacticoon-plugins/reacticoon-validation/src'

import reacticoonMockApiPlugin from 'reacticoon/reacticoon-mock-api-plugin'

import bookmarkForm from '../modules/bookmarkForm'
import circleForm from '../modules/circleForm'
import bookForm from '../modules/bookForm'
import loginForm from '../modules/auth/form'

import bmTheme from './bmTheme'

export default [
  __DEV__ && {
    plugin: reacticoonMockApiPlugin,
    config: {
      enabled: true,
    },
  },
  __DEV__ && {
    plugin: reacticoonPluginExample,
    config: {
      toto: 42,
    },
  },
  {
    plugin: reacticoonMaterialUI,
    config: {
      theme: bmTheme,
    },
  },
  {
    plugin: reacticoonLogger,
    config: {},
  },
  {
    plugin: reacticoonSentry,
    config: {
      // TODO:
      sentryUrl: '',

      displayReportDialog: true,

      // TODO:
      appVersion: '',
    },
  },
  {
    plugin: reacticoonForm,
    config: {
      // the validator to use with our form
      validator: reacticoonValidator,
      forms: [
        {
          form: bookmarkForm,
          options: {},
        },
        {
          form: loginForm,
          options: {},
        },
        {
          form: circleForm,
        },
        {
          form: bookForm,
        },
      ],
    },
  },
]
