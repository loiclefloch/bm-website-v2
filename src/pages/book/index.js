import React, { Component } from 'react'

import { useModule } from 'reacticoon/module'
import BookModule from 'modules/book'

import Page from 'components/Page'
import View from './View'

useModule(BookModule)

class BookPage extends Component {
  render() {
    const circleId = this.props.params.circleId
    const bookId = this.props.params.bookId

    try {
      return (
        <Page title="" isContentFull>
          <View circleId={circleId} bookId={bookId} />
        </Page>
      )
    } catch (e) {
      debugger
    }
  }
}

export default BookPage
