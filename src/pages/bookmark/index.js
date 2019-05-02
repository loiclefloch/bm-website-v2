import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookmarkModule from 'modules/bookmark/bookmark'
import { useModule } from 'reacticoon/module'
import { reacticoonConnect } from 'reacticoon/view'
import { isFetchingTags } from 'modules/tag'

import Page from 'components/Page'

import Header from './components/Header'
import Content from './components/Content'

import RightNav from './components/RightNav'
import ContentLoaderView from './components/ContentLoaderView'

useModule(BookmarkModule)

class BookmarkPage extends Component {
  componentDidMount() {
    // load bookmark
    // TODO: use the newBookmark on state if exists.
    this.props.fetchBookmark(this.props.params.bookmarkId)
  }

  handleUpdateBookmark = bookmark => {
    this.props.updateBookmark(bookmark)
  }

  render() {
    const { isFetchingBookmark, bookmark } = this.props

    return (
      <Page title="" isFetching={false}>
        <div
          style={{
            margin: 'auto',
          }}
        >
          <div
            style={{
              height: '100%',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '70%' }}>
                <div style={{ maxWidth: 900, margin: 'auto' }}>
                  {isFetchingBookmark || !bookmark ? (
                    <ContentLoaderView />
                  ) : (
                    <React.Fragment>
                      <Header bookmark={bookmark} />
                      <Content bookmark={bookmark} />
                    </React.Fragment>
                  )}
                </div>
              </div>
              <div style={{ flex: '30%' }}>
                {isFetchingBookmark || !bookmark ? null : (
                  <RightNav bookmark={bookmark} onUpdateBookmark={this.handleUpdateBookmark} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

BookmarkPage.propTypes = {
  fetchBookmark: PropTypes.func.isRequired,
  isFetchingBookmark: PropTypes.bool.isRequired,
  bookmark: PropTypes.object,
}

export default reacticoonConnect(
  'Bookmark',
  Bookmark => {
    const getBookmark = Bookmark.makeGetBookmark()

    const mapStateToProps = (state, props) => {
      return {
        isFetchingBookmark: Bookmark.isFetchingBookmark(state),
        bookmark: getBookmark(state, props),
        isFetchingTags: isFetchingTags(state),
      }
    }

    return mapStateToProps
  },
  Bookmark => ({
    fetchBookmark: Bookmark.fetchBookmark,
    updateBookmark: Bookmark.updateBookmark,
  })
)(BookmarkPage)
