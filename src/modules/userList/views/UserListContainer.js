import React from 'react'
import { connect } from 'reacticoon/view'

import { getFetchUserListData, getFetchUserListError, isFetchingUserList } from '../selectors'
import { fetchUserList } from '../actions'

/**
 * Requirements:
 *
 */
class UserListContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.loadUserList(this.props)
  }

  componentDidUpdate(prevProps) {
    // const props = this.props
    // if (nextProps.bookId !== props.bookId && ((!props.book || props.book.id) && nextProps.bookId)) {
    //   this.loadUserList(nextProps, false)
    // }
  }

  loadUserList(props) {
    props.fetchUserList(props.circleId, props.bookId)
  }

  render() {
    const { userList, isFecthingUserList, fetchUserListError } = this.props

    return this.props.children({
      userList,
      isFecthingUserList,
      fetchUserListError,
    })
  }
}

UserListContainer.defaultProps = {
}

UserListContainer.propTypes = {
}

const mapStateToProps = (state, props) => {
  return {
    userList: getFetchUserListData(state),
    isFecthingUserList: isFetchingUserList(state),
    fetchUserListError: getFetchUserListError(state),
  }
}

export default connect(
  mapStateToProps,
  {
    fetchUserList,
  }
)(UserListContainer)
