//
// create appOptions `entities` config with registered modules
//
import forOwn from 'lodash/forOwn'
import isNil from 'lodash/isNil'
import invariant from 'invariant'
import { getModules } from './config'

const generateModuleEntities = () => {
  const entities = {}

  forOwn(getModules(), (module, key) => {
    invariant(!isNil(module.content.reducer), `no reducer found for ${module.name}`)
    entities[module.name] = module.content.reducer
  })

  return entities
}

export default generateModuleEntities
