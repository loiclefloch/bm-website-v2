import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withModule from 'reacticoon/module/withModule'

import PageLoader from 'app/components/PageLoader'
import Page from 'components/Page'
import View from './View'

class CircleListPage extends Component {
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
      <Page title="Circles" isFetching={isFetchingCircles}>
        <View
          circles={circles}
          isFetching={isFetchingCircles}
          actions={{
            showCircle: this.props.showCircle,
          }}
        />
      </Page>
    )
  }
}

export default withModule(
  'CircleListModule',
  // equivalent of CircleListModule.connect(
  //   {
  //     isFetchingCircles: 'isFetchingCircles',
  //     circles: 'getCirclesSortedByDate',
  //   },
  //   ['showCircle', 'loadCircles']
  // )(CircleListPage)
  [
    {
      isFetchingCircles: 'isFetchingCircles',
      circles: 'getCirclesSortedByDate',
    },
    ['showCircle', 'loadCircles'],
  ],
  () => import(/*  webpackChunkName: "CircleListModule" */ 'modules/circle/list'),
  <PageLoader />
)(CircleListPage)
