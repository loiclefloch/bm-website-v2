import React, { Component } from 'react'

import { useModule } from 'reacticoon/module'
import BookmarkListModule from 'modules/bookmark/bookmarkList'

import Page from 'components/Page'
import View from './View'

useModule(BookmarkListModule)

class DashboardPage extends Component {
  render() {
    return (
      <Page title="Dashboard">
        <View />
      </Page>
    )
  }
}

export default DashboardPage
