import reacticoonPluginExample from 'app/reacticoon-plugins/reacticoon-plugin-example/src'
import reacticoonLogger from 'app/reacticoon-plugins/reacticoon-plugin-logger/src'
import reacticoonSentry from 'app/reacticoon-plugins/reacticoon-plugin-sentry/src'
import reacticoonForm from 'app/reacticoon-plugins/reacticoon-form/src'
import { reacticoonValidator } from 'app/reacticoon-plugins/reacticoon-validation/src'

import bookmarkForm from '../modules/bookmarkForm'
import circleForm from '../modules/circleForm'
import bookForm from '../modules/bookForm'
import loginForm from '../modules/auth/form'

export default [
  {
    plugin: reacticoonPluginExample,
    config: {
      toto: 42,
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
