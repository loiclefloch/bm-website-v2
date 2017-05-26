import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  showCircle,
  loadCircles,

  isFetchingCircles,
} from '../../../modules/circle'

import {
  getCirclesSortedByDate,
 } from './selectors'

import CirclesList from './components/CirclesList'

class DashboardPage extends Component {
  static propTypes = {
    circles: PropTypes.array.isRequired,
    isFetchingCircles: PropTypes.bool.isRequired,
    showCircle: PropTypes.func.isRequired,
    loadCircles: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadCircles()
  }

  render() {
    const { isFetchingCircles, circles } = this.props

    return (
      <div>
        <h1>
          Circles
        </h1>

        <CirclesList
          circles={circles}
          isFetching={isFetchingCircles}
          actions={{
            showCircle: this.props.showCircle
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetchingCircles: isFetchingCircles(state),
    circles: getCirclesSortedByDate(state),
   }
}

export default connect(mapStateToProps, {
  showCircle,
  loadCircles,
})(DashboardPage)
