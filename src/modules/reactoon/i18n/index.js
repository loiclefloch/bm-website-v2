import _ from 'lodash'

import IntlMessageFormat from 'intl-messageformat'

import { addLocaleData, defineMessages } from 'react-intl'

import localesEN from './locales/en'

/**
 * @Singleton
 *
 * @link https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.nqpzdmp66
 */
class I18n {

  /**
   * The locale to use by default.
   * This locale is used if the user locale is not available on `localeData`.
   */
  defaultLocale: string = 'en'

  /**
   * Contains the current locale.
   */
  locale: string = ''

  /**
   * Contains all the messages for all the locales.
   */
  localeData: Object = {}

  /**
   * Contains all the messages for the current selected locale.
   */
  messages: Object = {}

  configure() {
    if (!global.Intl) {
      console.error('Required intl Polyfill')
    }

    this.localeData = {}
    this.localeData.en = localesEN

    this.changeLocale(this.getDefaultLocale())
  }

  languageWithoutRegionCode(language: string): string {
    if (_.isEmpty(language)) {
      return 'en'
    }

    // Split locales with a region code
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

    return languageWithoutRegionCode
  }

  getCurrentLanguageWithoutRegionCode(): string {
    return this.languageWithoutRegionCode(this.locale)
  }

  getDefaultLocale(): string {
    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
    const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage

    return language
  }

  changeLocale(locale: string) {
    this.locale = locale

    addLocaleData([...localesEN])

    // Split locales with a region code
    const languageWithoutRegionCode = this.languageWithoutRegionCode(this.locale)

    // Try full locale, try locale without region code, fallback to the default locale.
    this.messages = this.localeData[languageWithoutRegionCode]
    || this.localeData[this.locale] ||  this.localeData[this.defaultLocale]

    // TODO: in dev mode, verify all keys exists in differents locales.

    // Register messages. TODO: test
    defineMessages(this.messages)
  }

  tr(key: string, params: Object = {}): string {
    return this.trWithLocale(this.locale, key, params)
  }

  trWithLocale(locale: string, key: string, params: Object = {}): string {
    if (_.isEmpty(key)) {
      // TODO: in dev, error
      return ''
    }

    const message = this.findForKey(key)

    try {
      const msg = new IntlMessageFormat(message, locale)

      // TODO: handle key does not exists.

      return msg.format(params)
    } catch (e) {
      // Note: Sometimes strings contains params that does not need to be handle here, like
      // components.select.add_label_text `Ajouter {label} ?`
      // Here our IntlMessageFormat.format try to format the label, but don't have any param.
      // For those case, we have to try / catch the error. The tricks to avoid errors consists to
      // set as parameter the same string. Example here:
      // `I18n.tr('components.select.add_label_text', { label: '{label}'})`
      console.warn(`I18n: ${key} error when formatting for locale ${this.locale}`, params)
    }

    return message
  }

  findForKey(key: string): string {
    const printErrorMessage = (key: string) => {
      // TODO: log error.
      console.warn(`I18n: Impossible to find ${key} for locale ${this.locale}`)
    }

    try {
      const message = this.messages[key]

      if (_.isNil(message)) {
        printErrorMessage(key)
        return this.getDefaultForKey(key)
      }

      return message
    } catch (e) {
      printErrorMessage(key)
      return this.getDefaultForKey(key)
    }
  }

  getDefaultForKey(key: string): string {
    // return key
    try {
      // we use the 'en' locale to find default message because it is the most up-to-date language
      // when developing.
      const message = this.localeData['en'][key]

      if (!_.isNil(message)) {
        return message
      }
    } catch (e) {
      // just in case, should not happened.
    }

    return key
  }

}

const _I18nInstance = new I18n()

export default _I18nInstance
