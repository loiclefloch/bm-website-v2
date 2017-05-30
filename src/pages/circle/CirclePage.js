import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchCircle,
  isFetchingCircle,
  makeGetCircle,
} from '../../modules/circle'

import LoadingPage from '../../components/loading/LoadingPage'
import Header from './components/Header'

class CirclePage extends Component {
  static propTypes = {
    fetchCircle: PropTypes.func.isRequired,
    isFetchingCircle: PropTypes.bool.isRequired,
    circle: PropTypes.object,
  }

  componentDidMount() {
    // load circle
    if (!this.props.circle) {
      this.props.fetchCircle(this.props.params.circleId)
    }
  }

  render() {
    const { isFetchingCircle, circle } = this.props

    if (isFetchingCircle || !circle) {
      return (
        <LoadingPage
          message="Loading circle"
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
          circle={circle}
        />
      </div>
    )
  }
}


const makeMapStateToProps = () => {
  const getCircle = makeGetCircle()
  const mapStateToProps = (state, props) => {
    return {
      isFetchingCircle: isFetchingCircle(state),
      circle: getCircle(state, props),
     }
  }
  return mapStateToProps
}

export default connect(makeMapStateToProps, {
  fetchCircle,
})(CirclePage)
