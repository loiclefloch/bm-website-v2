import reacticoonPluginExample from '../plugins/reacticoon-plugin-example'
import reacticoonLogger from '../plugins/reacticoon-plugin-logger'
import reacticoonSentry from '../plugins/reacticoon-plugin-sentry'
import reacticoonForm from '../plugins/reacticoon-form'

import bookmarkForm from '../modules/bookmarkForm'
import circleForm from '../modules/circleForm'
import bookForm from '../modules/bookForm'
import loginForm from '../modules/auth/form'
import { reacticoonValidator } from '../plugins/reacticoon-validation'

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
