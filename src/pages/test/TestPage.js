import React, { Component } from 'react'
import { connect } from 'react-redux'

import map from 'lodash/map'

import LoadingPage from '../../components/loading/LoadingPage'
import { generateToc } from '../../modules/bookmark/utils'
import Link from '../../components/router/Link'

class TestPage extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {/* <LoadingPage
          message="Loading bookmark"
          show
        /> */}

        <Link
          to={Link.Route.BOOKMARK}
          params={{
            bookmarkId: '622',
          }}
        >
          youtube video
        </Link>

        <Link
          to={Link.Route.BOOKMARK}
          params={{
            bookmarkId: '591',
          }}
        >
          slides
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {
})(TestPage)
