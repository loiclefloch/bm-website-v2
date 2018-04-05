import forEach from 'lodash/forEach'
import ReactoonEvents from './ReactoonEvents'

/**
 * Manage dispatch of Reacticoon Events and plugins custom events
 */
class EventManager {
  /**
   * key: event
   * value: array of events
   */
  listeners = {}

  /**
   * Shortctut to ReactoonEvents.
   * Also contains the plugins events. (see registerEvents)
   */
  Event = { ...ReactoonEvents }

  addListener(event, fn) {
    this.listeners[event] = [...(this.listeners[event] || []), fn]

    // TODO:
    // - verify fn is a function
    // - verify event is listed on Reacticoon events or plugins events
  }

  dispatch(event, data = {}) {
    const listeners = this.listeners[event]

    // TODO: dev log

    if (listeners !== undefined) {
      listeners.forEach(listener => {
        listener({
          event,
          data,
        })
      })
    }
  }

  registerEvents(events) {
    // TODO: in dev, verify that there is no collusion
    this.Events = { ...this.Events, ...events }
  }

  addListeners(listeners) {
    forEach(listeners, (fn, event) => {
      this.addListener(event, fn)
    })
  }
}

// EventManager is a Singleton
export default new EventManager()
