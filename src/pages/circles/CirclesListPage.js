import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withModule from 'reacticoon/module/withModule'

import PageLoader from 'app/components/PageLoader'
import Page from 'components/Page'
import View from './View'

class CircleListPage extends Component {
  static propTypes = {
    circles: PropTypes.array.isRequired,
    isPendingCircles: PropTypes.bool.isRequired,
    showCircle: PropTypes.func.isRequired,
    loadCircles: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadCircles()
  }

  render() {
    const { isPendingCircles, circles } = this.props

    return (
      <Page title="Circles" isPending={isPendingCircles}>
        <View
          circles={circles}
          isPending={isPendingCircles}
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
  //     isPendingCircles: 'isPendingCircles',
  //     circles: 'getCirclesSortedByDate',
  //   },
  //   ['showCircle', 'loadCircles']
  // )(CircleListPage)
  [
    {
      isPendingCircles: 'isPendingCircles',
      circles: 'getCirclesSortedByDate',
    },
    ['showCircle', 'loadCircles'],
  ],
  () => import(/*  webpackChunkName: "CircleListModule" */ 'modules/circle/list'),
  <PageLoader />
)(CircleListPage)
