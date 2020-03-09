import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookmarkModule from 'modules/bookmark/bookmark'
import { useModule } from 'reacticoon/module'
import { reacticoonConnect } from 'reacticoon/view'
import { isPendingTags } from 'modules/tag'

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
    const { isPendingBookmark, bookmark } = this.props

    return (
      <Page title="" isPending={false}>
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
                  {isPendingBookmark || !bookmark ? (
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
                {isPendingBookmark || !bookmark ? null : (
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
  isPendingBookmark: PropTypes.bool.isRequired,
  bookmark: PropTypes.object,
}

export default reacticoonConnect(
  'Bookmark',
  Bookmark => {
    const getBookmark = Bookmark.makeGetBookmark()

    const mapStateToProps = (state, props) => {
      return {
        isPendingBookmark: Bookmark.isPendingBookmark(state),
        bookmark: getBookmark(state, props),
        isPendingTags: isPendingTags(state),
      }
    }

    return mapStateToProps
  },
  Bookmark => ({
    fetchBookmark: Bookmark.fetchBookmark,
    updateBookmark: Bookmark.updateBookmark,
  })
)(BookmarkPage)
