import { __DEV__ } from 'reacticoon/environment'
import reacticoonLogger from 'reacticoon-plugins/reacticoon-plugin-logger/src'
import reacticoonSentry from 'reacticoon-plugins/reacticoon-plugin-sentry/src'
import reacticoonMaterialUI from 'reacticoon-plugins/reacticoon-material-ui/src'
import reacticoonForm from 'reacticoon-plugins/reacticoon-form/src'
import { reacticoonValidator } from 'reacticoon-plugins/reacticoon-validation/src'
import reacticoonFlashMessages from 'reacticoon-plugins/reacticoon-flash-messages/src'

import bookmarkForm from '../modules/bookmarkForm'
import circleForm from '../modules/circleForm'
import bookForm from '../modules/bookForm'
import loginForm from '../modules/auth/form'

import bmTheme from './bmTheme'

export default [
  __DEV__ && {
    plugin: require('reacticoon-plugins/reacticoon-mock-api-plugin/src').default,
    config: {
      enabled: true,
    },
  },
  __DEV__ && {
    plugin: require('reacticoon-plugins/reacticoon-plugin-example/src').default,
    config: {
      toto: 42,
    },
  },
  __DEV__ && {
    plugin: require('reacticoon-plugins/reacticoon-plugin-ci/src').default,
  },
  {
    plugin: reacticoonMaterialUI,
    config: {
      theme: bmTheme,
    },
  },
  {
    plugin: reacticoonFlashMessages,
    config: {
      types: ['TEST'],
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
