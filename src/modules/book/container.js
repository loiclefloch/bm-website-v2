import { createSimpleContainer } from 'reacticoon/container'

import BookModule from 'modules/book'

const BookContainer = createSimpleContainer('BookContainer', {
  module: BookModule,
  apiCallAction: 'fetchBook',
  selectors: 'fetchBookSelectors',
  mapChildrenProps: childrenProps => {
    return {
      ...childrenProps,
      addedPropForChildren: 42,
    }
  },
})

export default BookContainer
