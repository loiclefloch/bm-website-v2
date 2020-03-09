import React, { Component } from 'react'

import { useModule } from 'reacticoon/module'
import BookNewModule from 'modules/bookNew'

import CircleContainer from 'modules/circle/circle/views/CircleContainer'
import Page from 'components/Page'
import View from './View'

try {
  useModule(BookNewModule)
} catch (e) {
  debugger
}

class BookNewPage extends Component {
  render() {
    return (
      <CircleContainer circleId={this.props.params.circleId}>
        {({ circle, isPendingCircle }) => (
          <Page title="New book" isPending={isPendingCircle || !circle}>
            <View circle={circle} />
          </Page>
        )}
      </CircleContainer>
    )
  }
}

export default BookNewPage
