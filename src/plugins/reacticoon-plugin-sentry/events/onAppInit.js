import isEmpty from 'lodash/isEmpty'
import { getPluginConfig } from '../../../modules/reacticoon/plugin'

import Logger from '../logger'

const onAppInit = () => {
  const config = getPluginConfig('ReacticoonPluginExample')

  if (config) {
    if (isEmpty(config.sentryUrl)) {
      console.warn(`Can't configure sentry. Missing 'sentryUrl' config.`)
    } else {
      // configure sentry logger
      Logger.configure({
        sentryUrl: config.sentryUrl,
        displayReportDialog: config.displayReportDialog || true,
        appVersion: config.appVersion || 'N/A',
      })
    }
  }
}

export default onAppInit
