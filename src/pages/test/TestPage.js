import React, { Component } from 'react'
import { connect } from 'react-redux'

import map from 'lodash/map'

import LoadingPage from '../../components/loading/LoadingPage'
import { generateToc } from '../../modules/bookmark/utils'

class TestPage extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }

  getToc() {
    const content = `<h1 id="h1_1">test</h1>
      <h2 id="h2_1">test h2 1</h2>
      <br />
      <p>dewfew</p>
      <h2 id="h2_2">test h2 2</h2>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h3>This is heading 3</h3>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h4>This is heading 4</h4>
      <h4>This is heading 4</h4>
      <h4>This is heading 4</h4>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h5>This is heading 5</h5>
      <h5>This is heading 5</h5>
      <h5>This is heading 5</h5>
    `


    return generateToc(content)
  }

  render() {
    const toc = this.getToc()
    const styles = {
      H1: {

      },
      H2: {
        paddingLeft: '10px',
      },
      H3: {
        paddingLeft: '20px',
      },
      H4: {
        paddingLeft: '30px',
      },
      H5: {
        paddingLeft: '40px',
      },
      h5: {
        paddingLeft: '50px',
      },
    }

    return (
      <div>
        <LoadingPage
          message="Loading bookmark"
          show
        />

        <pre>
          {JSON.stringify(toc, null, 4)}
        </pre>

        {map(toc, (elem) => {
          return (
            <div>
              <a href={`#${elem.id}`}
                style={styles[elem.type]}>
            {elem.title}
              </a>
            </div>
          )
        })}
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
