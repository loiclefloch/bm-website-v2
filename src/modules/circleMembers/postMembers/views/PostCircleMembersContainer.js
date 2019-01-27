import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'reacticoon/view'

import {
  isFetchingPostCircleMembers,
  getDataPostCircleMembers,
  getPostCircleMembersError,
} from '../selectors'
import { postCircleMembers } from '../actions'

/**
 * Requirements:
 * - circleId
 */
class PostCircleMembersContainer extends React.PureComponent {
  
  postCircleMembers = members => {
    this.props.postCircleMembers(this.props.circleId, members)
  }

  render() {
    const {
      postCircleMembersData,
      isFetchingPostCircleMembers,
      postCircleMembersError,
    } = this.props

    return this.props.children({
      postCircleMembersData,
      isFetchingPostCircleMembers,
      postCircleMembersError,
      postCircleMembers: this.postCircleMembers,
    })
  }
}

PostCircleMembersContainer.propTypes = {
  circleId: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => ({
  postCircleMembersData: getDataPostCircleMembers(state),
  isFetchingPostCircleMembers: isFetchingPostCircleMembers(state),
  postCircleMembersError: getPostCircleMembersError(state),
})

export default connect(
  mapStateToProps,
  {
    postCircleMembers,
  }
)(PostCircleMembersContainer)
