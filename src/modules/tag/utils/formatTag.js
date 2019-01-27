import isNil from 'lodash/isNil'
import ColorsUtils from '../../../utils/ColorsUtils'

export const formatTag = (tag) => {
  if (isNil(tag)) {
    return null
  }
  tag = setColorType(tag)
  return tag
}

const setColorType  = (tag) => {
  tag.isLightColor = ColorsUtils.isLightColor(tag.color)
  return tag
}
