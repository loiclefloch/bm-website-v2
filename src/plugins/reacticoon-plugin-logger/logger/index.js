import Raven from 'raven-js'

let _loggerConfig = {
  SENTRY_URL: '',

  DISPLAY_REPORT_DIALOG: true,

  APP_VERSION: ''
};

export default class Logger {

  static LoggerLevel = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error'
  };

  static notImplemented({ type, detail }) {
    console.error(type, detail);

    if (Raven.isSetup()) {
      const message = `[${type}] ${Logger.formatObject(detail)}`;
      Raven.captureMessage(message, {
        level: Logger.LoggerLevel.WARNING
      });
    }
  }

  static warning({ type, detail }) {
    console.warn(type, detail);

    if (Raven.isSetup()) {
      const message = `[${type}] ${Logger.formatObject(detail)}`;
      Raven.captureMessage(message, {
        level: Logger.LoggerLevel.WARNING
      });
    }
  }

  static error({ type, detail }) {
    console.error(type, detail);

    if (Raven.isSetup()) {
      const message = `[${type}] ${Logger.formatObject(detail)}`;
      Raven.captureMessage(message, {
        level: Logger.LoggerLevel.WARNING
      });
    }
  }

   /**
   * Called when an exception is thrown during an action.
   *
   * See crashReporter.js
   *
   * @param  {[type]} err    exception thrown
   * @param  {[type]} action action dispatched when the error occured
   * @param  {[type]} state  current store state
   */
  static reduxException({ err, action, state }) {
    if (Raven.isSetup()) {
      console.error('action exception', err)

      Raven.captureException(err, {
        level: Logger.LoggerLevel.ERROR,
        extra: {
          action,
          state,
          // userData: _userData,
        },
      })

      Logger.runReportDialog()
    }
  }

  static formatObject(object: ?any) {
    try {
      return JSON.stringify(object);
    } catch (e) {
    }

    return object;
  }

  static configure(config) {
    _loggerConfig = config;

    if (!Raven.isSetup()) {
      // Do not send errors to sentry if we are on localhost.
      if (document.location.hostname !== 'localhost') {
        Raven.config(_loggerConfig.SENTRY_URL).install();
        Raven.setTagsContext({
          version: _loggerConfig.VERSION
        });
      }
    }
  }

  static componentDidCatch({ error, info }) {
    if (Raven.isSetup()) {
      // see https://docs.getsentry.com/hosted/clients/javascript/usage/#raven-js-additional-context
      Raven.captureException(error, {
        extra: {
          info,
          trace: Logger.getStackTrace(),
          // state: getStore().getState(),
          // userData: _userData,
        },
      })

      Logger.runReportDialog()
    }
  }

  /**
   * Log an exception to the console and send it to our tracker (raven).
   * @see https://github.com/getsentry/raven-js/blob/master/docs/integrations/react.rst
   *
   * @param ex
   * @param context
   */
  static logException({ ex, context }) {
    if (Raven.isSetup()) {
      // see https://docs.getsentry.com/hosted/clients/javascript/usage/#raven-js-additional-context
      Raven.captureException(ex, {
        extra: context
      });

      if (_loggerConfig.DISPLAY_REPORT_DIALOG) {
        console.log('DISPLAY_REPORT_DIALOG');
        // see https://docs.getsentry.com/hosted/clients/javascript/usage/#user-feedback
        Raven.showReportDialog();
      }
    }
    /* eslint no-console:0 */
    if (window.console && console.error) {
      console.error(ex);
    }
  }

  /**
   *
   * @param see Logger.UserRole
   * @param userId
   */
  static setUserContext(userRole: string, userId: string) {
    if (Raven.isSetup()) {
      // https://docs.getsentry.com/hosted/clients/javascript/#adding-context
      Raven.setUserContext({
        userRole,
        id: userId
      });
    }
  }

  static clearUserContext() {
    if (Raven.isSetup()) {
      // https://docs.getsentry.com/hosted/clients/javascript/#adding-context
      Raven.setUserContext();
    }
  }

  static lastEventId() {
    if (Raven.isSetup()) {
      return Raven.lastEventId();
    }
    return null;
  }
}
