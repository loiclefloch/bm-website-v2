import React, { Component } from 'react'

import { useModule } from 'reacticoon/module'
import CircleNewModule from 'modules/circleNew'
import BookmarkListModule from 'modules/bookmark/bookmarkList'

import Page from 'components/Page'
import View from './View'

useModule(CircleNewModule)

class CircleNewPage extends Component {
  render() {
    return (
      <Page title="">
        <View />
      </Page>
    )
  }
}

export default CircleNewPage
