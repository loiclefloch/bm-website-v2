import React, { Component } from 'react'

import Page from 'components/Page'
import View from './View'

class CircleNewPage extends Component {
  render() {

    const circleId = this.props.params.circleId

    return (
      <Page title="">
        <View circleId={circleId} />
      </Page>
    )
  }
}

export default CircleNewPage
