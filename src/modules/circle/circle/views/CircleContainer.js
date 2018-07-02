import React from 'react'
import PropTypes from 'prop-types'
import isNull from 'lodash/isNull'
import { connect } from 'reacticoon/view'

import { isFetchingCircle, makeGetCircle } from '../selectors'
import { fetchCircle } from '../actions'

/**
 * Requirements:
 * - circleId
 */
class CircleContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.loadCircle(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props

    if (nextProps.circleId !== props.circleId && ((!props.book || props.book.id) && nextProps.circleId)) {
      this.loadCircle(nextProps)
    }
  }

  loadCircle(props) {
    props.fetchCircle(props.circleId)
  }

  render() {
    const { circle, isFetchingCircle, fetchCircleError } = this.props

    return this.props.children({
      circle,
      isFetchingCircle,
      fetchCircleError,
    })
  }
}

CircleContainer.defaultProps = {
  circleId: null,
}

CircleContainer.propTypes = {
  circleId: PropTypes.string,
}

const makeMapStateToProps = () => {
  const getCircle = makeGetCircle()

  const mapStateToProps = (state, props) => ({
    isFetchingCircle: isFetchingCircle(state),
    circle: getCircle(state, props),
    // TODO: fetchCircleError
    // fetchCircleError: 
  })
  return mapStateToProps
}

export default connect(
  makeMapStateToProps,
  {
    fetchCircle,
  }
)(CircleContainer)
