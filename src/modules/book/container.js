import React from 'react'

import { createSimpleContainer } from 'reacticoon/container'

import BookModule from 'modules/book'

const BookContainer = createSimpleContainer('BookContainer', {
  module: BookModule,
  apiCallAction: 'fetchBook',
  selectors: 'fetchBookSelectors',
  apiCallParameters: {
    book: 1,
  },
  mapChildrenProps: childrenProps => {
    return {
      ...childrenProps,
      addedProp: 42,
    }
  },
})

export default BookContainer
