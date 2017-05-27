import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchBookmark,
  isFetchingBookmark,
  getBookmark,
} from '../../modules/bookmark'

import Header from './components/Header'
import Content from './components/Content'

class BookmarkPage extends Component {
  static propTypes = {
    fetchBookmark: PropTypes.func.isRequired,
    isFetchingBookmark: PropTypes.bool.isRequired,
    bookmark: PropTypes.object,
  }

  componentDidMount() {
    // load bookmark
    this.props.fetchBookmark(this.props.params.bookmarkId)
  }

  render() {
    const { isFetchingBookmark, bookmark } = this.props

    if (isFetchingBookmark || !bookmark) {
      return null
    }

    return (
      <div>
        <Header
          bookmark={bookmark}
        />

        <Content
          bookmark={bookmark}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingBookmark: isFetchingBookmark(state),
    bookmark: getBookmark(state),
   }
}

export default connect(mapStateToProps, {
  fetchBookmark,
})(BookmarkPage)
