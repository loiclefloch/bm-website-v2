import React, { Component } from 'react'

import CircleContainer from 'modules/circle/circle/views/CircleContainer'
import Page from 'components/Page'
import View from './View'

class CircleNewPage extends Component {
  render() {
    return (
      <CircleContainer circleId={this.props.params.circleId}>
        {({ circle, isFetchingCircle }) => (
          <Page title="New book" isFetching={isFetchingCircle || !circle}>
            <View circle={circle} />
          </Page>
        )}
      </CircleContainer>
    )
  }
}

export default CircleNewPage
