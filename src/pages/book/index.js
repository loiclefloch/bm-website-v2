import React, { Component } from 'react'

import Page from 'components/Page'
import View from './View'

class BookPage extends Component {
  render() {
    const circleId = this.props.params.circleId
    const bookId = this.props.params.bookId

    return (
      <Page title="" isContentFull>
        <View circleId={circleId} bookId={bookId} />
      </Page>
    )
  }
}

export default BookPage
