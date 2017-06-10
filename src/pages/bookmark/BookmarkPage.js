import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchBookmark,
  addTagsToBookmark,
  isFetchingBookmark,
  makeGetBookmark,
} from '../../modules/bookmark'

import Header from './components/Header'
import Content from './components/Content'

import RightNav from './components/RightNav'
import TocView from './components/TocView'

import LoadingPage from '../../components/loading/LoadingPage'

class BookmarkPage extends Component {
  static propTypes = {
    fetchBookmark: PropTypes.func.isRequired,
    isFetchingBookmark: PropTypes.bool.isRequired,
    bookmark: PropTypes.object,
  }

  componentDidMount() {
    // load bookmark
    // TODO: use the newBookmark on state if exists.
    this.props.fetchBookmark(this.props.params.bookmarkId)
  }

  handleSelectedTagsChange = (tags) => {
    this.props.addTagsToBookmark(tags, this.props.bookmark)
  }

  render() {
    const { isFetchingBookmark, bookmark } = this.props

    if (isFetchingBookmark || !bookmark) {
      return (
        <LoadingPage
          message="Loading bookmark"
          show
        />
      )
    }

    return (
      <div
        style={{
          maxWidth: '800px',
          paddingLeft: '5vw', // TODO: remove on mobile
        }}
      >

        <Header
          bookmark={bookmark}
          onSelectedTagsChange={this.handleSelectedTagsChange}
        />

        <RightNav>
          <TocView
            bookmark={bookmark}
          />
        </RightNav>
        
        <Content
          bookmark={bookmark}
        />
      </div>
    )
  }
}


const makeMapStateToProps = () => {
  const getBookmark = makeGetBookmark()
  const mapStateToProps = (state, props) => {
    return {
      isFetchingBookmark: isFetchingBookmark(state),
      bookmark: getBookmark(state, props),
    }
  }
  return mapStateToProps
}

export default connect(makeMapStateToProps, {
  fetchBookmark,
  addTagsToBookmark,
})(BookmarkPage)
