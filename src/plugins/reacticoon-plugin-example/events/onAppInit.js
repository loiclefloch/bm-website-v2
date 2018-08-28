import { EventManager } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'
import onCustomEvent from './onCustomEvent'

const onAppInit = () => {
  console.info('received ON_APP_INIT event')
  console.info('ReacticoonPluginExample config: ', getPluginConfig('ReacticoonPluginExample'))

  EventManager.dispatch(
    onCustomEvent.EVENT,
    {

    }
  )
}

export default onAppInit
