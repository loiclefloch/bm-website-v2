import React from 'react'
import PropTypes from 'prop-types'
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import { connect } from 'reacticoon/view'

import {
  loadBookmarks,
  loadBookmarksForBook,
  onLoadMoreBookmarks,
} from 'modules/bookmark/bookmarkList/actions'

import {
  makeGetFilteredBookmarks,
  isFetchingBookmarks,
  getBookmarksPaging,
} from 'modules/bookmark/bookmarkList/selectors'

import { isFetchingTags } from 'modules/tag'

/**
 * Requirements:
 * - circleId
 * - bookId
 *
 */
class BookmarksListContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: null,
    }

    this.loadBookmarks(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props
    if (nextProps.bookId !== props.bookId && ((!props.book || props.book.id) && nextProps.bookId)) {
      this.loadBookmarks(nextProps)
    }
  }

  loadBookmarks(props) {
    if (!props.isFetchingBook) {
      if (isEmpty(props.bookId)) {
        props.loadBookmarks()
      } else {
        props.loadBookmarksForBook(props.circleId, props.bookId)
      }
    }
  }

  handleLoadMore = () => {
    if (isEmpty(this.props.bookId)) {
      this.props.onLoadMoreBookmarks(this.props.paging)
    } else {
      this.props.onLoadMoreBookBookmarks(this.props.circleId, this.props.bookId, this.props.paging)
    }
  }

  handleSearchQueryChange = searchQuery => {
    this.setState({
      searchQuery
    })
  }

  render() {
    const { isFetchingBookmarks, isFetchingTags, bookmarks, paging } = this.props

    return this.props.children({
      isFetchingBookmarks,
      isFetchingTags,
      bookmarks,
      paging,
      onLoadMore: this.handleLoadMore, 
      onSearchQueryChange: this.handleSearchQueryChange,
    })
  }
}

BookmarksListContainer.defaultProps = {
  circleId: null,
  bookId: null,
}

BookmarksListContainer.propTypes = {
  bookId: PropTypes.string,
  circleId: PropTypes.string,
  userId: PropTypes.string,
}

const makeMapStateToProps = () => {
  const getFilteredBookmarks = makeGetFilteredBookmarks()

  const mapStateToProps = (state, props) => {
    return {
      isFetchingBookmarks: isFetchingBookmarks(state),
      isFetchingTags: isFetchingTags(state),
      bookmarks: getFilteredBookmarks(state, {
        searchQuery: state.searchQuery,
      }),
      paging: getBookmarksPaging(state),
    }
  }
  return mapStateToProps
}

export default connect(
  makeMapStateToProps,
  {
    loadBookmarks,
    loadBookmarksForBook,
    onLoadMoreBookmarks,
  }
)(BookmarksListContainer)
