import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoadingPage from '../../components/loading/LoadingPage'

class TestPage extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <LoadingPage
        message="Loading bookmark"
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {
})(TestPage)
