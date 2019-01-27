import React from 'react'
import PropTypes from 'prop-types'
import isNull from 'lodash/isNull'
import { connect } from 'reacticoon/view'

import { isFetchingBook, getFetchBookData, getFetchBookError } from '../selectors'
import { fetchBook } from '../actions'

/**
 * Requirements:
 * - circleId
 * - bookId
 *
 */
class BookContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.loadBook(this.props, this.props.forceReload)
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props
    if (nextProps.bookId !== props.bookId && ((!props.book || props.book.id) && nextProps.bookId)) {
      this.loadBook(nextProps, false)
    }
  }

  loadBook(props, forceReload = false) {
    if (!props.isFetchingBook && (isNull(this.props.book) || forceReload)) {
      props.fetchBook(props.circleId, props.bookId)
    }
  }

  render() {
    const { book, isFetchingBook, fetchBookError } = this.props

    return this.props.children({
      book,
      isFetchingBook,
      fetchBookError,
    })
  }
}

BookContainer.defaultProps = {
  bookId: null,
}

BookContainer.propTypes = {
  bookId: PropTypes.string,
}

const mapStateToProps = (state, props) => {
  return {
    book: getFetchBookData(state),
    isFecthingBook: isFetchingBook(state),
    fetchBookError: getFetchBookError(state),
  }
}

export default connect(
  mapStateToProps,
  {
    fetchBook,
  }
)(BookContainer)
