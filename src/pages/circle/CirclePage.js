import React, { Component } from 'react'

import CircleModule from 'app/modules/circle/circle'
import { useModule } from 'reacticoon/module'
import CircleContainer from 'modules/circle/circle/views/CircleContainer'

import Page from 'components/Page'
import View from './View'

useModule(CircleModule)

class CirclePage extends Component {
  render() {
    return (
      <CircleContainer circleId={this.props.params.circleId}>
        {({ circle, isPendingCircle }) => (
          <Page
            title={circle && circle.name}
            isPending={isPendingCircle || !circle}
            loadingMessage="Loading circle"
            isContentFull
          >
            <View circle={circle} />
          </Page>
        )}
      </CircleContainer>
    )
  }
}

export default CirclePage
