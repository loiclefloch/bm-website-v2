import React, { Component } from 'react'
import isEmpty from 'lodash/isEmpty'

import { ImageLoader } from '../../../components/image'

const PreviewPicture = ({ bookmark }) => {
  if (isEmpty(bookmark.previewPicture)) {
    return (null)
  }

  return (
    <ImageLoader
      src={bookmark.previewPicture}
    />
  )
}

export default PreviewPicture
