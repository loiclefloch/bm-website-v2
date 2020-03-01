import React from 'react'
import PropTypes from 'prop-types'

import CircleModule from '../'

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

    if (
      nextProps.circleId !== props.circleId &&
      (!props.book || props.book.id) && nextProps.circleId
    ) {
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

CircleContainer.propTypes = {
  circleId: PropTypes.string,
}

export default CircleModule.connect(
  {
    circle: 'makeGetCircle',
    isFetchingCircle: 'isFetchingCircle',
  },
  'fetchCircle',
  {
    defaultProps: {
      circleId: null,
    },
  }
)(CircleContainer)
