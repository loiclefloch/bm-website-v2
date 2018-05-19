
const onCustomEvent = event => {
  console.info(`received onCustomEvent event (${event.type}`)
  console.info(event.data)
}

onCustomEvent.EVENT = 'ReacticoonPluginExample::Event::onCustomEvent'

export default onCustomEvent
